import React from 'react';
import * as d3 from "d3"

import "./ForceGraph.css"
import {areaRadial} from 'd3';

class ForceGraph extends React.Component {
    constructor(props) {
        super(props);

        let nodeList = this.props.nodes
            ? [...this.props.nodes.map(n => {
                n.living = true;
                n.saved = false;
                return n;
            })]
            : [];
        let edgeList = this.props.edges
            ? [...this.props.edges]
            : [];

        this.state = {
            nodeList: nodeList,
            edgeList: edgeList,
            seed: this.props.seed
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
            "carbon storage"
        ]
        let transformed = name
            .toLowerCase()
            .split("-")
            .join(" ")
        return es.includes(transformed);
    }

    handleMouseOver = (d) => {
        this
            .props
            .onNodeHover(d.originalTarget.__data__);
    }

    filterNodes = (epiNode, n) => {
        let arr = [];
        let filteredEdgeList = [...this.props.edges]
        if (n > 0) {
            n = n - 1
            filteredEdgeList.forEach((e) => {
                if (e.source.speciesID === epiNode.speciesID) {
                    arr.push(e);
                    arr.push(...this.filterNodes(e.target, n, []))
                } else if (e.target.speciesID === epiNode.speciesID) {
                    arr.push(e);
                    arr.push(...this.filterNodes(e.source, n, []))
                }
            })
        }
        return arr;
    }

    handleRightClick = (d) => {
        if (this.props.onRightClick) {
            this
                .state
                .sim
                .stop()
            this
                .props
                .onRightClick(d, Math.random())
        }
    }

    handleESBiomass = () => {
        const biomassID = [350, 450, 550, 650, 750, 850, 950, 1050]
        const bioArr = [];
        if (this.props.onUpdateESBiomass) {
            biomassID.forEach((e, i) => {
                let b = 0;
                const biomassLinks = this.props.edges.filter(l => {
                    return l.Type === "ES" ? l.source.speciesID === e : false
                })

                biomassLinks.forEach(n => {
                    b += (n.target.biomass === -1 || !n.target.living) ? 0 : n.target.biomass
                })

                bioArr[i] = b;
            })
            this.props.onUpdateESBiomass(bioArr)
        }
    }

    restartSim = () => {
        this
            .state
            .sim
            .alpha(0.9)
            .restart()
    }

    gameTick = () => {
        if(this.props.gameClock === 1) {
            let nodes = this.state.nodeList;
            let setDead = true;
            // while(setDead) {
            //     let node = nodes[Math.floor(Math.random() * nodes.length)];
            //     if(node.organismType !== "Ecosystem Service") {
            //         node.living = false;
            //         setDead = false;
            //     }
            // }
            nodes[1].living = false;
            this.setState({nodeList: nodes})
            this.state.sim.alpha(0.1).restart()
            this.handleESBiomass()
        }
    }

    createSim = () => {
        const svg = d3
            .select(`#${this.props.name}`)
            .attr("width", this.props.width)
            .attr("height", this.props.height);

        const rect = svg
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .attr("fill", "#CCC");

        let g_links = svg
            .append("g")
            .attr("class", "links");

        let g_nodes = svg
            .append("g")
            .attr("class", "nodes");

        let links = g_links
            .selectAll("line")
            .data(this.state.edgeList)
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
            .attr("class", d => d.Type === "Feeding"
                ? "line-feeding"
                : "line-es")
            .attr('marker-start', 'url(#arrowhead)');

        let nodes = g_nodes
            .selectAll(".nodes")
            .data(this.state.nodeList)
            .enter()
            .append("path")
            .attr("d", d3.symbol().size(300).type((d) => {
                let test = this.isES(d.nodeName)
                    ? d3.symbolSquare
                    : d3.symbolCircle
                return test
            }))
            .attr("fill", d => {
                let color = this
                    .props
                    .colors
                    .find(c => {
                        return c.name === d.nodeColor
                    })
                return color
                    ? color.hex
                    : "#00f"
            })
            .on("mouseover", this.handleMouseOver)
            .on("contextmenu", (event, d) => {
                event.preventDefault();
                return this.handleRightClick(d);
            });

        const simulation = d3
            .forceSimulation(this.state.nodeList)
            .force("link", d3.forceLink(this.state.edgeList))
            .force("charge", d3.forceManyBody().strength(-900))
            .force("x", d3.forceX(this.props.width / 2))
            .force("y", d3.forceY(this.props.height / 2))

        simulation.on("tick", () => {
            nodes
                .attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")";
                }).attr("class", (d) => d.living ? "" : "dead");

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
        })

        this.setState({sim: simulation, g_nodes: g_nodes, g_links: g_links}, () => {
            this.handleESBiomass()
        })
    }

    tl2y = d3
        .scaleLinear()
        .domain([0.5, 7])
        .range([
            this.props.height - 10,
            10
        ]);

    restartSim() {
        return new Promise(() => this.state.sim.alpha(0.1).restart())
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.gameClock !== this.props.gameClock) {
            this.gameTick()
        }

        if (prevProps.seed !== this.props.seed) {
            this.state.sim && d3
                .select(`#${this.props.name}`)
                .selectAll("*")
                .remove()

            if (this.props.epiNode) {
                let simpleNodes = []
                let addedNodes = []
                let linksArr = this.filterNodes(this.props.epiNode, this.props.n, [])
                linksArr.forEach((e) => {
                    simpleNodes.push(e.source.speciesID)
                    simpleNodes.push(e.target.speciesID)
                })

                let nodesArr = [...this.props.nodes].filter(e => {
                    if (!addedNodes.includes(e.speciesID)) {
                        // if(true) {
                        return simpleNodes.includes(e.speciesID);
                    } else {
                        return false;
                    }
                })

                this.setState((state, props) => {
                    return {edgeList: linksArr, nodeList: nodesArr}
                }, () => {
                    this.sleep(1000).then(() => {
                        this.state.sim.stop()
                    })
                    this.createSim()
                })
            }
        } else if (prevProps.trophic !== this.props.trophic) {
            this
                .state
                .sim
                .force("trophic", d3.forceY().strength(this.props.trophic
                    ? 5
                    : 0).y((d) => {
                    return this.tl2y(d.trophicLevel);
                }))

            this
                .state
                .sim
                .alpha(0.1)
                .restart()
            this.sleep(500).then(() => {
                this.state.sim.stop()
            })
        }

    }

    componentDidMount() {
        if (this.props.n) {} else {
            this.createSim()
        }

    }

    render()
    {
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
                                xoverflow="visible">
                                <path d="M 0,-5 L 10 ,0 L 0,5" fill="#999"></path>
                            </marker>
                        </defs>
                    </svg>
                </div>
            </div>
        )
    }
}

export default ForceGraph;