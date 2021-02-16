import React from 'react';
import SideBar from '../components/SideBar.js'
import MainGraph from '../components/MainGraph.js'
import SubGraphs from '../components/SubGraphs.js'

import * as lists from "../data/lists"

import "./Game.css"
import {Switch} from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);

        let [levelNodes,
            levelEdges] = this.getLevelData();

        this.state = {
            level: this.props.match.params.level,
            levelNodes: levelNodes,
            levelEdges: levelEdges,
            subGraphNodes: [],
            subGraphEdges: [],
            subSeed: 0,
        };
    }

    getLevelData = () => {
        let levelNodes;
        let levelEdges;

        switch (this.props.match.params.level) {
            case "1":
                levelNodes = lists.nodeList1;
                levelEdges = lists.edgeList1;
                break;
            case "2":
                levelNodes = lists.nodeList2;
                levelEdges = lists.edgeList2;
                break;
            case "3":
                levelNodes = lists.nodeList3;
                levelEdges = lists.edgeList3;
                break;
            case "4":
                levelNodes = lists.nodeList4;
                levelEdges = lists.edgeList4;
                break;
            case "5":
                levelNodes = lists.nodeList5;
                levelEdges = lists.edgeList5;
                break;
            case "6":
                levelNodes = lists.nodeList6;
                levelEdges = lists.edgeList6;
                break;
            case "7":
                levelNodes = lists.nodeList7;
                levelEdges = lists.edgeList2;
                break;
            default:
                break;
        }

        return [levelNodes, levelEdges]
    }

    componentDidMount() {}

    handleNodeHover = (d) => {
        this.setState((state, props) => {
            return {hoveredNode: d}
        })
    }

    handleRightClick = (d, seed) => {
        this.setState((state, props) => {
            return {subGraphEpi: d, subSeed: seed}
        })
    }

    render()
    {

        return (
            <div className="game-wrap">
                <SideBar level={this.state.level} data={this.state.hoveredNode}/>
                <MainGraph
                    colors={lists.colors}
                    nodes={[...this.state.levelNodes]}
                    edges={[...this.state.levelEdges]}
                    onNodeHover={this.handleNodeHover}
                    onRightClick={this.handleRightClick}/>
                <SubGraphs onNodeHover={this.handleNodeHover} epiNode={this.state.subGraphEpi} seed={this.state.subSeed} colors={lists.colors} nodes={[...this.state.levelNodes]}
                    edges={[...this.state.levelEdges]}/>
            </div>
        )
    }
}

export default Game;
