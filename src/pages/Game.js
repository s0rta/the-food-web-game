import React from 'react';
import SideBar from '../components/SideBar.js'
import MainGraph from '../components/MainGraph.js'
import SubGraphs from '../components/SubGraphs.js'
import Modal from 'react-modal'
import * as lists from "../data/lists"

import "./Game.css"
import {Switch} from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);

        let [levelNodes,
            levelEdges, levelData] = this.getLevelData();

        this.state = {
            level: this.props.match.params.level,
            levelNodes: levelNodes,
            levelEdges: levelEdges,
            levelData: levelData,
            subGraphNodes: [],
            subGraphEdges: [],
            subSeed: 0,
            esBiomass: [-1, -1, -1, -1, -1, -1, -1, -1],
            step: 0,
            isModalOpen: true,
            levelOver: false,
            levelWon: false,
        };
    }

    getLevelData = () => {
        let levelNodes;
        let levelEdges;
        let levelData;

        switch (this.props.match.params.level) {
            case "1":
                levelNodes = lists.nodeList1;
                levelEdges = lists.edgeList1;
                levelData = lists.levels[0];
                break;
            case "2":
                levelNodes = lists.nodeList2;
                levelEdges = lists.edgeList2;
                levelData = lists.levels[1];
                break;
            case "3":
                levelNodes = lists.nodeList3;
                levelEdges = lists.edgeList3;
                levelData = lists.levels[2];
                break;
            case "4":
                levelNodes = lists.nodeList4;
                levelEdges = lists.edgeList4;
                levelData = lists.levels[3];
                break;
            case "5":
                levelNodes = lists.nodeList5;
                levelEdges = lists.edgeList5;
                levelData = lists.levels[4];
                break;
            case "6":
                levelNodes = lists.nodeList6;
                levelEdges = lists.edgeList6;
                levelData = lists.levels[5];
                break;
            case "7":
                levelNodes = lists.nodeList7;
                levelEdges = lists.edgeList7;
                levelData = lists.levels[6];
                break;
            default:
                break;
        }
        console.log(levelEdges)
        return [levelNodes, levelEdges, levelData]
    }

    componentDidMount() {}

    handleLevelEnd = (d) => {
        this.setState({levelWon: d, levelOver: true})
    }

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

    handleESBiomass = (bioArr, step) => {
        this.setState({esBiomass: bioArr, step: step})
    }

    swapModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    closeEndModal = () => {
        this.setState({levelOver: false})
    }

    render()
    {

        return (
            <div className="game-wrap">
                <Modal isOpen={this.state.isModalOpen} className="levelModal"><h1>Level {this.state.levelData.level} Intro</h1><p>{this.state.levelData.intro}</p><h1>Objective</h1><p>{this.state.levelData.objective}</p><button onClick={() => this.swapModal()}>Sounds Good</button></Modal>
                <Modal isOpen={this.state.levelOver} className="levelModal">{this.state.levelWon ? this.state.levelData.win : this.state.levelData.lose}<br/> <button onClick={() => window.location.reload()}>Restart Level</button><button onClick={() => this.closeEndModal()}>Explore</button></Modal>
                <SideBar onToggleModal={this.swapModal} level={this.state.level} data={this.state.hoveredNode}/>
                <MainGraph
                    levelData={this.state.levelData}
                    colors={lists.colors}
                    nodes={[...this.state.levelNodes]}
                    edges={[...this.state.levelEdges]}
                    onNodeHover={this.handleNodeHover}
                    onRightClick={this.handleRightClick}
                    onUpdateESBiomass={this.handleESBiomass}
                    onLevelEnd={this.handleLevelEnd}/>
                <SubGraphs onLevelEnd={this.handleLevelEnd} levelData={this.state.levelData} esBiomass={this.state.esBiomass} step={this.state.step} onNodeHover={this.handleNodeHover} epiNode={this.state.subGraphEpi} seed={this.state.subSeed} colors={lists.colors} nodes={[...this.state.levelNodes]}
                    edges={[...this.state.levelEdges]}/>
            </div>
        )
    }
}

export default Game;
