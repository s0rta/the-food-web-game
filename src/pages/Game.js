import React from "react";
import SideBar from "../components/SideBar.js";
import MainGraph from "../components/MainGraph.js";
import SubGraphs from "../components/SubGraphs.js";
import Modal from "react-modal";
import * as enLists from "../data/lists";
import TreeMap from "../components/TreeMap.js";

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
      levelWon: true,
      trophicDisplay: true,
      gameStart: false,
      locale: this.props.match.params.language
    };
  }

  getLevelData = () => {
    console.log(this.props.match.params)
    let levelNodes;
    let levelEdges;
    let levelData;

    const lists = this.props.match.params.language === 'en' ? enLists : ''

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
        levelNodes = lists.nodeList7;
        levelEdges = lists.edgeList7;
        levelData = lists.levels[6][3];
        break;
    }
    return [levelNodes, levelEdges, levelData];
  };

  componentDidMount() { }

  handleLevelLost = () => {
    this.setState({ levelWon: false })
  }

  handleLevelEnd = () => {
    // setTimeout(() => {
    this.setState({ levelOver: true });
    // }, 2000);
  };

  handleNodeHover = (d) => {
    this.setState(() => {
      return { hoveredNode: d };
    });
  };

  handleRightClick = (d, seed) => {
    this.setState(() => {
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
    this.setState({ trophicDisplay: !this.state.trophicDisplay })
  }

  simulateDisturbance = () => {
    this.setState({ gameStart: true })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.level !== prevProps.match.params.level) {
      window.location.reload();
    }
  }

  render() {
    const winTarget = {
      pathname: this.props.match.params.level > 7 ? `/` : `/game/${parseFloat(this.props.match.params.level) + 1}/${this.props.match.params.language}`,
    };

    return (
      <div className="game-wrap">
        <Modal isOpen={this.state.isModalOpen} className="levelModal">
          <h2 class="level-header">Level {this.state.levelData.level} Introduction</h2> <p>{this.state.levelData.intro}</p> <h2 class="level-header">Objective</h2>
          <p>{this.state.levelData.objective}</p>
          <button class="btn--primary" onClick={() => this.swapModal()}>Start Level</button>
        </Modal>
        {/* Modal for post game screen, using a modal so data transfer is simpler */}
        <Modal isOpen={this.state.levelOver} className="levelModal levelOverModal">
          {this.state.levelWon
            ? this.state.levelData.win
            : this.state.levelData.lose}
          <br />
          {this.state.levelWon && (
            <Link to={winTarget}>
              <button className="btn btn--primary">Next Level</button>
            </Link>
          )}
          <button className="btn" onClick={() => window.location.reload()}>
            Restart Level
          </button>
          <button className="btn" onClick={() => this.closeEndModal()}>Explore</button>
          {/* <button className="btn" onClick={() => this.closeEndModal()}>Explore</button> */}
          <TreeMap levelOver={this.state.levelOver} nodeList={this.state.levelNodes} />
        </Modal>
        <SideBar
          onToggleModal={this.swapModal}
          locale={this.state.locale}
          onToggleTrophic={this.toggleTrophic}
          onSimulateDisturbance={this.simulateDisturbance}
          level={this.state.level}
          data={this.state.hoveredNode}
        />
        <MainGraph
          levelData={this.state.levelData}
          levelOver={this.state.levelOver}
          trophicDisplay={this.state.trophicDisplay}
          winTarget={winTarget}
          won={this.state.levelWon}
          colors={enLists.colors}
          nodes={[...this.state.levelNodes]}
          edges={[...this.state.levelEdges]}
          onNodeHover={this.handleNodeHover}
          onRightClick={this.handleRightClick}
          onUpdateESBiomass={this.handleESBiomass}
          onUpdateSpeciesRemaining={this.handleSpeciesRemaining}
          onLevelEnd={this.handleLevelEnd}
          gameStart={this.state.gameStart}
        />
        <SubGraphs
          onLevelLost={this.handleLevelLost}
          levelOver={this.state.levelOver}
          levelData={this.state.levelData}
          esBiomass={this.state.esBiomass}
          step={this.state.step}
          onNodeHover={this.handleNodeHover}
          epiNode={this.state.subGraphEpi}
          seed={this.state.subSeed}
          colors={enLists.colors}
          nodes={[...this.state.levelNodes]}
          edges={[...this.state.levelEdges]}
          speciesRemaining={this.state.speciesRemaining}
        />
      </div>
    );
  }
}

export default Game;
