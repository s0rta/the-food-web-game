import React from "react";
import SideBar from "../components/SideBar.js";
import MainGraph from "../components/MainGraph.js";
import SubGraphs from "../components/SubGraphs.js";
import Modal from "react-modal";
import * as lists from "../data/lists";

import "./Game.css";
import { Link } from "react-router-dom";

class Game extends React.Component {
  constructor(props) {
    super(props);

    let [levelNodes, levelEdges, levelData] = this.getLevelData();

    this.state = {
      level: this.props.match.params.level,
      levelNodes: levelNodes,
      levelEdges: levelEdges,
      levelData: levelData,
      speciesRemaining: -1,
      subGraphNodes: [],
      subGraphEdges: [],
      subSeed: 0,
      esBiomass: [-1, -1, -1, -1, -1, -1, -1, -1],
      step: 0,
      isModalOpen: true,
      levelOver: false,
      levelWon: false,
      trophicDisplay: false
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
        // levelData = lists.levels[3][Math.floor(Math.random() * 4)];
        levelData = lists.levels[3][0];
        break;
      case "5":
        levelNodes = lists.nodeList5;
        levelEdges = lists.edgeList5;
        // levelData = lists.levels[4][Math.floor(Math.random() * 4)];
        levelData = lists.levels[4][1];
        break;
      case "6":
        levelNodes = lists.nodeList6;
        levelEdges = lists.edgeList6;
        // levelData = lists.levels[5][Math.floor(Math.random() * 4)];
        levelData = lists.levels[5][2];
        break;
      case "7":
        levelNodes = lists.nodeList7;
        levelEdges = lists.edgeList7;
        // levelData = lists.levels[6][Math.floor(Math.random() * 4)];
        levelData = lists.levels[6][3];
        break;
      default:
        break;
    }
    console.log(levelEdges);
    return [levelNodes, levelEdges, levelData];
  };

  componentDidMount() {}

  handleLevelEnd = (d) => {
    this.setState({ levelWon: d, levelOver: true });
  };

  handleNodeHover = (d) => {
    this.setState((state, props) => {
      return { hoveredNode: d };
    });
  };

  handleRightClick = (d, seed) => {
    this.setState((state, props) => {
      return { subGraphEpi: d, subSeed: seed };
    });
  };

  handleESBiomass = (bioArr, step) => {
    this.setState({ esBiomass: bioArr, step: step });
  };

  handleSpeciesRemaining = (count) => {
    this.setState({ speciesRemaining: count - 8 });
  };

  swapModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  closeEndModal = () => {
    this.setState({ levelOver: false });
  };

  toggleTrophic = () => {
    this.setState({ trophicDisplay: !this.state.trophicDisplay})
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.level !== prevProps.match.params.level) {
      window.location.reload();
    }
  }

  render() {
    const winTarget = {
      pathname: `/game/${parseFloat(this.props.match.params.level) + 1}`,
    };

    return (
      <div className="game-wrap">
        <Modal isOpen={this.state.isModalOpen} className="levelModal">
          <h2 class="level-header">Level {this.state.levelData.level} Intro</h2>
          <p>{this.state.levelData.intro}</p>
          <h2 class="level-header">Objective</h2>
          <p>{this.state.levelData.objective}</p>
          <button class="btn--primary" onClick={() => this.swapModal()}>Start Level</button>
        </Modal>
        <Modal isOpen={this.state.levelOver} className="levelModal">
          {this.state.levelWon
            ? this.state.levelData.win
            : this.state.levelData.lose}
          <br />
          {this.state.levelWon && (
            <Link to={winTarget}>
              <button>Next Level</button>
            </Link>
          )}
          <button onClick={() => window.location.reload()}>
            Restart Level
          </button>
          <button onClick={() => this.closeEndModal()}>Explore</button>
        </Modal>
        <SideBar
          onToggleModal={this.swapModal}
          onToggleTrophic={this.toggleTrophic}
          level={this.state.level}
          data={this.state.hoveredNode}
        />
        <MainGraph
          levelData={this.state.levelData}
          levelOver={this.state.levelOver}
          trophicDisplay={this.state.trophicDisplay}
          winTarget={winTarget}
          won={this.state.levelWon}
          colors={lists.colors}
          nodes={[...this.state.levelNodes]}
          edges={[...this.state.levelEdges]}
          onNodeHover={this.handleNodeHover}
          onRightClick={this.handleRightClick}
          onUpdateESBiomass={this.handleESBiomass}
          onUpdateSpeciesRemaining={this.handleSpeciesRemaining}
          onLevelEnd={this.handleLevelEnd}
        />
        <SubGraphs
          onLevelEnd={this.handleLevelEnd}
          levelData={this.state.levelData}
          esBiomass={this.state.esBiomass}
          step={this.state.step}
          onNodeHover={this.handleNodeHover}
          epiNode={this.state.subGraphEpi}
          seed={this.state.subSeed}
          colors={lists.colors}
          nodes={[...this.state.levelNodes]}
          edges={[...this.state.levelEdges]}
          speciesRemaining={this.state.speciesRemaining}
        />
      </div>
    );
  }
}

export default Game;
