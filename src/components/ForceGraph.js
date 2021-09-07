import React from "react";
import * as d3 from "d3";

import "./ForceGraph.css";
import { timeThursdays } from "d3";

class ForceGraph extends React.Component {
  constructor(props) {
    super(props);

    let nodeList = this.props.nodes
      ? [
          ...this.props.nodes.map((n) => {
            n.living = true;
            n.saved = false;
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
    };
  }

  isES = (name) => {
    const es = [
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
    ];
    let transformed = name.toLowerCase().split("-").join(" ");
    return es.includes(transformed);
  };

  handleMouseOver(d) {
    this.props.onNodeHover(d);
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

  handleSpeciesRemaining = () => {
    if (this.props.onUpdateSpeciesRemaining) {
      let count = 0;
      this.state.nodeList.forEach((e) => {
        if (e.living) {
          count++;
        }
      });
      this.props.onUpdateSpeciesRemaining(count);
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

  restartSim = () => {
    this.state.sim.alpha(0.1).restart();
  };

  killLinks = (nSID) => {
    let newEdges = [...this.state.edgeList].map((e) => {
      if (e && (e.target.speciesID === nSID || e.source.speciesID === nSID)) {
        e.living = false;
      }
      return e;
    });

    this.setState({ edgeList: newEdges });
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
          this.killLinks(node.speciesID);
          setDead = false;
          this.props.onSpeciesRemove();
        }
      }
      this.setState({ nodeList: nodes });
      this.restartSim();
      this.handleESBiomass();
      this.handleSpeciesRemaining();
    } else if (this.props.gameClock > this.props.levelData.initialKills) {
      let nodes = this.state.nodeList;
      let levelOver = true;
      nodes.map((node) => {
        // WHEN USING BIOMASS FOR DEAD
        // if(node.living) {
        //     let deadBiomass = 0;
        //     let biomass = 0;

        //     this.props.edges.forEach((edge) => {
        //         if(edge.source.speciesID === node.speciesID && edge.target.living === true) {
        //             biomass += edge.target.biomass;
        //             return true;
        //         } else if(edge.source.speciesID === node.speciesID) {
        //             biomass += edge.target.biomass;
        //             deadBiomass += edge.target.biomass;
        //             return false;
        //         }
        //     })
        //     let check = !(deadBiomass > 0 && ((deadBiomass / biomass) >= 0.20)) || node.organismType === "Ecosystem Service";
        //         node.living = check;
        //     if(!check) {
        //         levelOver = false;
        //     }

        // }

        // if using link count, doesn't really work because it counts every element at the same level
        // if(node.living) {
        //     let deadLinks = 0;
        //     let links = 0;

        //     this.props.edges.forEach((edge) => {
        //         if(edge.source.speciesID === node.speciesID && edge.target.living === true) {
        //             links++;
        //             return true;
        //         } else if(edge.source.speciesID === node.speciesID) {
        //             links++
        //             deadLinks++

        //             return false;
        //         }
        //     })
        //     let check = !(deadLinks > 0 && ((deadLinks / links) >= 0.8)) || node.organismType === "Ecosystem Service";
        //     if(check === false) {
        //         node.living = false;
        //         this.killLinks(node.speciesID);
        //     }

        //     if(!check) {
        //         levelOver = false;
        //     }

        // }

        if (node.living) {
          let deadBiomass = 0;
          let biomass = 0;

          this.props.edges.forEach((edge) => {
            const targetBiomass = Math.log(
              edge.target.biomass === -1 ? 0 : edge.target.biomass
            );
            if (
              edge.source.speciesID === node.speciesID &&
              edge.target.living === true
            ) {
              biomass += targetBiomass;
              return true;
            } else if (edge.source.speciesID === node.speciesID) {
              biomass += targetBiomass;
              deadBiomass += targetBiomass;
              return false;
            }
          });
          let check =
            !(deadBiomass > 0 && deadBiomass / biomass >= 0.2) ||
            node.organismType === "Ecosystem Service";
          node.living = check;
          if (!check) {
            levelOver = false;
            this.killLinks(node.speciesID);
          }
        }
        return node;
      });

      if (levelOver) {
        this.props.onLevelEnd(true);
      }

      this.setState({ nodeList: nodes });
      this.restartSim();
      this.handleESBiomass();
      this.handleSpeciesRemaining();
    }
  };

  createSim = () => {
    let transform = d3.zoomIdentity;

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
      .attr("stroke-width", 4);

    let g = svg.append("g");

    let g_links = g.append("g").attr("class", "links");

    let g_nodes = g.append("g").attr("class", "nodes");

    let links = g_links
      .selectAll("line")
      .data(
        this.state.edgeList.filter((n) => {
          return n.source !== n.target;
        })
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
      .attr("marker-start", () => {
        return "url(#arrowhead)";
      });

    let nodes = g_nodes
      .selectAll(".nodes")
      .data(this.state.nodeList)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .symbol()
          .size(() => {
            return 800;
          })
          .type((d) => {
            let test = this.isES(d.nodeName)
              ? d3.symbolSquare
              : d3.symbolCircle;
            return test;
          })
      )
      .attr("fill", (d) => {
        let color = this.props.colors.find((c) => {
          return c.name === d.nodeColor;
        });
        return "url('#service-node-icon')";
      })
      .on("mouseover", (event, d) => {
        return this.handleMouseOver(d);
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

    const zoomed = (event, d) => {
      g.attr("transform", event.transform);
    };

    const zoom = d3.zoom().on("zoom", zoomed);

    rect.call(zoom);

    const simulation = d3
      .forceSimulation(this.state.nodeList)
      .force("link", d3.forceLink(this.state.edgeList))
      .force("charge", d3.forceManyBody().strength(-900))
      .force("x", d3.forceX(this.props.width / 2))
      .force("y", d3.forceY(this.props.height / 2))
      .alpha(0.2);

    simulation.on("tick", () => {
      nodes
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
        .classed("dead", (d) => !d.living)
        .classed("saved", (d) => d.saved);

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
        .classed("dead", (d) => !d.living);
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gameClock !== this.props.gameClock) {
      this.gameTick();
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
          (state, props) => {
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
      this.state.sim.force(
        "trophic",
        d3
          .forceY()
          .strength(this.props.trophic ? 5 : 0)
          .y((d) => {
            return this.tl2y(d.trophicLevel);
          })
      );

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
    return (
      <div className="force-wrap">
        <div id="map">
          <svg id={this.props.name}>
            <defs>
              <marker
                id="arrowhead"
                viewBox="-0 -5 10 10"
                refX="-15"
                refY="0"
                orient="auto"
                markerWidth="13"
                markerHeight="13"
                xoverflow="visible"
              >
                <path d="M 0,-5 L 10 ,0 L 0,5" fill="#999"></path>
              </marker>

              <pattern
                id="bird-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#920000"
                ></circle>
                <image
                  className="bird-icon"
                  xlinkHref="/Node-Icons/bird-icon.svg"
                  x="1"
                  y="1"
                  width="28"
                  height="28"
                ></image>
              </pattern>

              <pattern
                id="crustacean-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                '
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#009292"
                ></circle>
                <image
                  className="crustacean-icon"
                  xlinkHref="/Node-Icons/crustacean-icon.svg"
                  x="1"
                  y="0"
                  width="28"
                  height="28"
                ></image>
              </pattern>
              <pattern
                id="fish-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#006ddb"
                ></circle>
                <image
                  className="fish-icon"
                  xlinkHref="/Node-Icons/fish-icon.svg"
                  x="0"
                  y="-3"
                  width="28"
                  height="28"
                ></image>
              </pattern>
              <pattern
                id="insect-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#490092"
                ></circle>
                <image
                  className="insect-icon"
                  xlinkHref="/Node-Icons/insect-icon.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="mammel-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#db6d00"
                ></circle>
                <image
                  className="mammel-icon"
                  xlinkHref="/Node-Icons/mammel-icon.svg"
                  x="2"
                  y="1"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="microscopic-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#000"
                ></circle>
                <image
                  className="microscopic-icon"
                  xlinkHref="/Node-Icons/microscopic-icon.svg"
                  x="1"
                  y="2"
                  width="28"
                  height="28"
                ></image>
              </pattern>

              <pattern
                id="mollusc-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#004949"
                ></circle>
                <image
                  className="mollusc-icon"
                  xlinkHref="/Node-Icons/mollusc-icon.svg"
                  x="3"
                  y="3"
                  width="24"
                  height="24"
                ></image>
              </pattern>

              <pattern
                id="plankton-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#ffff6d"
                ></circle>
                <image
                  className="plankton-icon"
                  xlinkHref="/Node-Icons/plankton-icon.svg"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                ></image>
              </pattern>

              <pattern
                id="plant-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
             <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#24ff24"
                ></circle>
   <image
                  className="plant-icon"
                  xlinkHref="/Node-Icons/plant-icon.svg"
                  x="2"
                  y="3"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="service-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
             <rect
      width="30"
      height="30"
      stroke="none"
                  fill="#ff6db6"
                ></rect>
   <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/service-icon.svg"
                  x="2"
                  y="2"
                  width="26"
                  height="26"
                ></image>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
}

export default ForceGraph;
