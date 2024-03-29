import React from "react";
import * as d3 from "d3";

import "./ForceGraph.css";

import ForceGraphSvgFramework from "../utils/ForceGraphSvgFramework";

class ForceGraph extends React.Component {
  constructor(props) {
    super(props);

    let nodeList = this.props.nodes
      ? [
        ...this.props.nodes.map((n) => {
          n.living = n.living || true;
          n.saved = n.saved || false;
          return n;
        }),
      ]
      : [];
    let edgeList = this.props.edges
      ? [
        ...this.props.edges.map((n) => {
          n.living = true;
          return n;
        }),
      ]
      : [];

    this.state = {
      nodeList: nodeList,
      edgeList: edgeList,
      levelES: nodeList
        .filter((d) => {
          return this.props.levelData?.shownGraphs.find((v) => {
            return (
              d.nodeName.split(" ").join("-").toLowerCase() === v ||
              v === "num-services"
            );
          });
        })
        .map((d) => {
          return d.index;
        }),
      seed: this.props.seed,
      step: 0,
      saves: this.props.levelData && this.props.levelData.saves,
      didNodeDie: false,
    };
  }

  isES = (name) => {
    const es =
      this.props.locale === "en"
        ? [
          "",
          "wave attenuation",
          "shoreline protection",
          "shoreline stabilization",
          "carbon sequestration",
          "water filtration",
          "commfishery",
          "birdwatching",
          "waterfowl hunting",
          "recfishery",
          "recreational fishery",
          "commercial fishery",
          "carbon storage",
        ]
        : ["Spanish environmental service"];
    let transformed = name?.toLowerCase().split("-").join(" ");
    return es.includes(transformed);
  };

  handleMouseOut() {
    d3.selectAll("line").attr("class", (e) => {
      let edgeClass = e.Type === "Feeding" ? "line-feeding " : "line-es ";
      edgeClass = (e.living ?? true)? edgeClass : edgeClass + " dead";
      return edgeClass;
    });
  }

  handleMouseOver(d) {
    this.props.onNodeHover(d, this.props.hoverLite);
    d3.selectAll("line").attr("class", (e) => {
      let edgeClass = e.Type === "Feeding" ? "line-feeding " : "line-es ";
      edgeClass = (e.living ?? true) ? edgeClass : edgeClass + " dead";
      if (
        e.source.speciesID !== d.speciesID &&
        e.target.speciesID !== d.speciesID
      ) {
        return edgeClass + " line-faded";
      } else {
        return edgeClass;
      }
    });
  }

  filterNodes = (epiNode, n) => {
    let arr = [];
    let filteredEdgeList = [...this.props.edges];
    if (n > 0) {
      n = n - 1;
      filteredEdgeList.forEach((e) => {
        if (this.props.flowIn && e.source.speciesID === epiNode.speciesID) {
          arr.push(e);
          arr.push(...this.filterNodes(e.target, n, []));
        } else if (
          this.props.flowOut &&
          e.target.speciesID === epiNode.speciesID
        ) {
          arr.push(e);
          arr.push(...this.filterNodes(e.source, n, []));
        }
      });
    }
    return arr;
  };

  handleRightClick = (d) => {
    if (this.props.onRightClick) {
      this.state.sim.stop();
      this.props.onRightClick(d, Math.random());
    }
  };

  handleESBiomass = () => {
    const biomassID = [350, 450, 550, 650, 750, 850, 950, 1050];
    const bioArr = [];
    if (this.props.onUpdateESBiomass) {
      biomassID.forEach((e, i) => {
        let b = 0;
        const biomassLinks = this.props.edges.filter((l) => {
          return l.Type === "ES" ? l.source.speciesID === e : false;
        });

        biomassLinks.forEach((n) => {
          b +=
            n.target.biomass === -1 || !n.target.living ? 0 : n.target.biomass;
        });

        bioArr[i] = b;
      });
      this.props.onUpdateESBiomass(bioArr, this.state.step);
      this.setState({ step: this.state.step + 1 });
    }
  };

  // this function is more handling tick data now that needs to be passed up
  // 1. handling the species remaining count
  // 2. handling the historical node and edge lists for the post screen
  handleSpeciesRemaining = () => {
    if (this.props.onUpdateSpeciesRemaining) {
      let count = 0;
      this.state.nodeList.forEach((e) => {
        if (e.living) {
          count++;
        }
      });
      this.props.onUpdateSpeciesRemaining(
        count,
        structuredClone(
          this.state.nodeList.map((e) => {
            return {
              biomass: e.biomass,
              nodeName: e.nodeName,
              speciesID: e.speciesID,
              living: e.living,
              desc: e.desc,
              imgCaption: e.imgCaption,
              imgFile: e.imgFile,
              index: e.index,
              organismType: e.organismType,
              nodeColor: e.nodeColor,
              nodeShape: e.nodeShape,
              trophicLevel: e.trophicLevel,
            };
          })
        ),
        structuredClone(
          this.state.edgeList.map((e) => {
            return {
              source: e.source.index,
              target: e.target.index,
              Type: e.Type,
              living: e.living,
              index: e.index,
            };
          })
        )
      );
    }
  };

  handleClick = (d) => {
    let nodes = this.state.nodeList;
    nodes.map((e) => {
      if (
        e.speciesID === d.speciesID &&
        d.living &&
        d.organismType !== "Ecosystem Service"
      ) {
        if (e.saved) {
          e.saved = false;
          this.setState({ saves: this.state.saves + 1 });
        } else if (this.state.saves > 0) {
          e.saved = true;
          this.setState({ saves: this.state.saves - 1 });
        }
        this.props.onUpdateSaves(this.state.saves);
      }
      return e;
    });

    this.setState({ nodeList: nodes });
    this.restartSim();
  };

  zoom_actions(event, g) {
    g.attr("transform", event.transform);
  }

  killLinks = (nSID) => {
    let newEdges = [...this.state.edgeList].map((e) => {
      if (e && (e.target.speciesID === nSID || e.source.speciesID === nSID)) {
        e.living = false;
      }
      return e;
    });

    this.setState({ edgeList: newEdges });
  };

  checkNode = (node) => {
    if (node.living) {
      let deadBiomass = 0;
      let biomass = 0;

      let deadLinks = 0;
      let links = 0;

      let deadTypes = new Set();
      let livingTypes = new Set();
      let types = new Set();

      this.props.edges.forEach((edge) => {
        const targetBiomass = edge.target.biomass;
        if (
          edge.source.speciesID === node.speciesID &&
          edge.target.living === true
        ) {
          biomass += targetBiomass;
          links++;
          types.add(edge.target.organismType);
          livingTypes.add(edge.target.organismType);
          return true;
        } else if (edge.source.speciesID === node.speciesID) {
          biomass += targetBiomass;
          deadBiomass += targetBiomass;
          deadTypes.add(edge.target.organismType);
          types.add(edge.target.organismType);
          links++;
          deadLinks++;
          return false;
        }
      });

      let killedTypes = [...deadTypes].filter((e) => !livingTypes.has(e));

      let check =
        ((deadBiomass === 0 || deadBiomass / biomass <= 0.31) &&
          (deadLinks === 0 || deadLinks / links <= 0.5) &&
          (killedTypes.length === 0 ||
            killedTypes.length / types.size <= 0.5)) ||
        node.organismType === "Ecosystem Service";
      node.living = check;
      if (!check) {
        this.setState({ didNodeDie: true });
        this.killLinks(node.speciesID);
      } else if (
        node.organismType === "Ecosystem Service" &&
        this.props.reqSpecies &&
        killedTypes.find((e) => this.props.reqSpecies.includes(e))
      ) {
        console.log(killedTypes);
        console.log(types);
        this.props.onLevelEnd(
          false,
          `Your ecosystem service ran out of a required species (${this.props.reqSpecies[0]}).`
        );
      }
    }
    return node;
  };

  gameTick = () => {
    if (this.props.gameClock <= this.props.levelData.initialKills) {
      let nodes = this.state.nodeList;
      let setDead = true;
      let tries = nodes.length * 10;
      while (setDead && tries >= 0) {
        tries--;
        let node = nodes[Math.floor(Math.random() * nodes.length)];
        if (
          node.living === true &&
          !node.saved &&
          this.props.levelData.removableIDs.includes(node.speciesID)
        ) {
          node.living = false;
          node.initial = true;
          this.killLinks(node.speciesID);
          setDead = false;
          this.props.onSpeciesRemove();

          // make sure the anything that would die second hand does
          nodes.map((n) => this.checkNode(n));
        }
      }
      this.setState({ nodeList: nodes });
      this.restartSim();
      this.handleESBiomass();
      this.handleSpeciesRemaining();
    } else if (this.props.gameClock > this.props.levelData.initialKills) {
      //checking for dead nodes after the initial kills have happened

      this.setState({ didNodeDie: false });
      let nodes = this.state.nodeList;
      nodes.map((n) => this.checkNode(n))
      // if no nodes dies, the level is over
      if (!this.state.didNodeDie) {
        let didWin = true
        // for easy levels 1-4, you need to pass based on count of saved species
        if (this.props.levelData.maintainReq) {
          let requiredSpecies = this.props.levelData.maintainReq
          let livingSpecies = 0
          this.state.nodeList.forEach(n => {
            if (n.living) {
              livingSpecies += 1
            }
          })
          console.log(requiredSpecies, livingSpecies)
          if (livingSpecies < requiredSpecies) {
            didWin = false
          }
        }
        this.props.onLevelEnd(didWin);
      }

      this.setState({ nodeList: nodes });
      this.restartSim();
      this.handleESBiomass();
      this.handleSpeciesRemaining();
    }
  };

  createSim = () => {
    const svg = d3
      .select(`#${this.props.name}`)
      .attr("width", this.props.width)
      .attr("height", this.props.height)
      .attr("fill", "#fff");

    const rect = svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", this.props.width)
      .attr("height", this.props.height)
      .attr("stroke", "#CCC")
      .classed("main-rect", () => true)
      .attr("stroke-width", 4);

    let g = svg.append("g");

    let g_links = g.append("g").attr("class", "links");

    let g_nodes = g.append("g").attr("class", "nodes");

    let links = g_links
      .selectAll("line")
      .data(
        this.state.edgeList.filter((n) => {
          return n.source !== n.target;
        }),
        (d) => d.index
      )
      .enter()
      .append("line")
      .attr("x2", (d) => {
        return d.source.x;
      })
      .attr("y2", (d) => {
        return d.source.y;
      })
      .attr("x1", (d) => {
        return d.target.x;
      })
      .attr("x1", (d) => {
        return d.target.y;
      })
      .attr("class", (d) => {
        return d.Type === "Feeding" ? "line-feeding" : "line-es";
      })
      .attr("marker-end", () => {
        return "url(#arrowhead)";
      });
    console.log(this.state.nodeList);
    let nodes = g_nodes
      .selectAll(".nodes")
      .data(this.state.nodeList, (d) => d.index)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .symbol()
          .size((d) => {
            let size = this.isES(d.nodeName) ? 900 : 750;
            return size;
          })
          .type((d) => {
            let test = this.isES(d.nodeName)
              ? d3.symbolSquare
              : d3.symbolCircle;
            return test;
          })
      )
      .attr("fill", (d) => {
        return `url('#${(d.organismType === "Ecosystem Service"
          ? d.nodeName
          : d.organismType
        )
          .toLowerCase()
          .split("s,")[0]
          .split(" ")
          .join("-")}-node-icon')`;
      })
      .on("mouseover", (event, d) => {
        return this.handleMouseOver(d);
      })
      .on("mouseout", (event, d) => {
        return this.handleMouseOut(d);
      })
      .on("click", (event, d) => {
        if (event.shiftKey) {
          return this.handleRightClick(d);
        }
        this.handleClick(d);
      })
      .on("contextmenu", (event, d) => {
        event.preventDefault();
        return this.handleRightClick(d);
      });

    const zoomed = (event) => {
      g.attr("transform", event.transform);
    };

    const zoom = d3.zoom().on("zoom", zoomed);

    rect.call(zoom);

    const simulation = d3
      .forceSimulation(this.state.nodeList)
      .force("link", d3.forceLink(this.state.edgeList))
      .force("charge", d3.forceManyBody().strength(-900))
      .force("x", d3.forceX(this.props.width / 2))
      .force(
        "y",
        d3
          .forceY()
          .strength(5)
          .y((d) => this.tl2y(d.trophicLevel))
      )
      .alpha(0.2);

    simulation.on("tick", () => {
      nodes
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
        .classed("dead", (d) => {
          return !(d.living ?? true)
        })
        .classed("saved", (d) => d.saved)
        .attr(
          "d",
          d3
            .symbol()
            .size((d) => {
              let size = this.isES(d.nodeName) ? 900 : d.saved ? 1000 : 750;
              return size;
            })
            .type((d) => {
              let test = this.isES(d.nodeName)
                ? d3.symbolSquare
                : d3.symbolCircle;
              return test;
            })
        );
      links = g_links
        .selectAll("line")
        .attr("x2", (d) => {
          return d.source.x;
        })
        .attr("y2", (d) => {
          return d.source.y;
        })
        .attr("x1", (d) => {
          return d.target.x;
        })
        .attr("y1", (d) => {
          return d.target.y;
        })
        .classed("dead", (d) => !(d.living ?? true));
    });


    this.setState(
      { sim: simulation, g_nodes: g_nodes, g_links: g_links },
      () => {
        this.handleESBiomass();
        this.handleSpeciesRemaining();
      }
    );
  };

  tl2y = d3
    .scaleLinear()
    .domain([0.5, 7])
    .range([this.props.height - 10, 10]);

  restartSim() {
    return new Promise(() => this.state.sim.alpha(0.1).restart());
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gameClock !== this.props.gameClock) {
      this.gameTick();
    }

    if (prevProps.historyStep !== this.props.historyStep) {
      // cant remove * because we need to keep definitions
      d3.select(`#${this.props.name}`).selectAll(".main-rect").remove();
      d3.select(`#${this.props.name}`).selectAll("g").remove();
      this.setState(
        { edgeList: this.props.edges, nodeList: this.props.nodes },
        () => {
          this.createSim();
        }
      );
    }

    if (prevProps.seed !== this.props.seed) {
      this.state.sim &&
        d3.select(`#${this.props.name}`).selectAll("*").remove();

      if (this.props.epiNode) {
        let simpleNodes = [];
        let addedNodes = [];
        let linksArr = this.filterNodes(this.props.epiNode, this.props.n, []);
        linksArr.forEach((e) => {
          simpleNodes.push(e.source.speciesID);
          simpleNodes.push(e.target.speciesID);
        });

        let nodesArr = [...this.props.nodes].filter((e) => {
          if (!addedNodes.includes(e.speciesID)) {
            return simpleNodes.includes(e.speciesID);
          } else {
            return false;
          }
        });

        this.setState(
          () => {
            return {
              edgeList: linksArr,
              nodeList: [...nodesArr, this.props.epiNode],
            };
          },
          () => {
            this.sleep(1000).then(() => {
              this.state.sim.stop();
            });
            this.createSim();
          }
        );
      }
    } else if (prevProps.trophic !== this.props.trophic) {
      this.state.sim
        .force(
          "y",
          this.props.trophic
            ? d3
              .forceY()
              .strength(5)
              .y((d) => this.tl2y(d.trophicLevel))
            : d3.forceY(this.props.height / 2)
        )
        .alpha(0.1);

      this.state.sim.alpha(0.1).restart();
      this.sleep(500).then(() => {
        this.state.sim.stop();
      });
    }
  }

  componentDidMount() {
    if (this.props.n) {
    } else {
      this.createSim();
    }
  }

  render() {
    return <ForceGraphSvgFramework name={this.props.name} />;
  }
}

export default ForceGraph;
