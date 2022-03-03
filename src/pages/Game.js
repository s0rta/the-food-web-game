import React from "react";
import SideBar from "../components/SideBar.js";
import MainGraph from "../components/MainGraph.js";
import SubGraphs from "../components/SubGraphs.js";
import Modal from "react-modal";
import * as enLists from "../data/lists";
import * as enRockyLists from "../data/list-rocky";
import TreeMap from "../components/TreeMap.js";

import { IntlProvider, FormattedMessage } from "react-intl";

import "./Game.css";
import { Link } from "react-router-dom";
import ForceGraph from "../components/ForceGraph.js";

const componentInSpanish = {
  level: "level in spanish",
  intro: "introduction in spanish",
  obj: "objective in spanish",
  startLvl: "start level in spanish",
  nextLvl: "next level in spanish",
  restartLvl: "restart level in spanish",
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    let [levelNodes, levelEdges, levelData, reqSpecies] = this.getLevelData();

    this.state = {
      level: this.props.match.params.level,
      levelNodes: levelNodes,
      levelEdges: levelEdges,
      levelData: levelData,
      reqSpecies: reqSpecies,
      speciesRemaining: -1,
      subGraphNodes: [],
      subGraphEdges: [],
      nodeHistory: [],
      edgeHistory: [],
      subSeed: 0,
      esBiomass: [-1, -1, -1, -1, -1, -1, -1, -1],
      step: 0,
      historyStep: 0,
      isModalOpen: true,
      levelOver: false,
      levelWon: true,
      trophicDisplay: true,
      gameStart: false,
      locale: this.props.match.params.language,
      levelMsg: "",
    };
  }

  getLevelData = () => {
    let levelNodes;
    let levelEdges;
    let levelData;
    let reqSpecies;
    let lists;

    if (this.props.match.params.difficulty === "hard") {
      lists = this.props.match.params.language === "en" ? enLists : "";
    } else {
      lists = this.props.match.params.language === "en" ? enRockyLists : "";
    }

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
        reqSpecies = ["Fish"];
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
    return [levelNodes, levelEdges, levelData, reqSpecies];
  };

  componentDidMount() {}

  handleLevelLost = () => {
    this.setState({ levelWon: false });
  };

  handleLevelEnd = (won, msg) => {
    // setTimeout(() => {
    console.log(msg);
    this.setState({ levelOver: true, levelWon: won, levelMsg: msg });
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

  handleSpeciesRemaining = (count, nodes, edges) => {
    this.setState({
      speciesRemaining: count - 8,
      nodeHistory: [...this.state.nodeHistory, nodes],
      edgeHistory: [...this.state.edgeHistory, edges],
    });
  };

  swapModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  closeEndModal = () => {
    this.setState({ levelOver: false });
  };

  toggleTrophic = () => {
    this.setState({ trophicDisplay: !this.state.trophicDisplay });
  };

  simulateDisturbance = () => {
    this.setState({ gameStart: true });
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.level !== prevProps.match.params.level) {
      window.location.reload();
    }
  }

  render() {
    const winTarget = {
      pathname:
        this.props.match.params.level > 7
          ? `/`
          : `/game/${parseFloat(this.props.match.params.level) + 1}/${
              this.props.match.params.difficulty
            }/${this.props.match.params.language}`,
    };

    return (
      <IntlProvider
        messages={this.state.locale === "es" ? componentInSpanish : ""}
        locale={this.state.locale}
        defaultLocale="en"
      >
        <div className="game-wrap">
          <Modal isOpen={this.state.isModalOpen} className="levelModal">
            <h2 class="level-header">
              <FormattedMessage id="level" defaultMessage="Level" />{" "}
              {this.state.levelData.level}{" "}
              <FormattedMessage id="intro" defaultMessage="Introduction" />
            </h2>{" "}
            <p>{this.state.levelData.intro}</p>{" "}
            <h2 class="level-header">
              <FormattedMessage id="obj" defaultMessage="Objective" />
            </h2>
            <p>{this.state.levelData.objective}</p>
            <button class="btn--primary" onClick={() => this.swapModal()}>
              <FormattedMessage id="startLvl" defaultMessage="Start Level" />
            </button>
          </Modal>
          {/* Modal for post game screen, using a modal so data transfer is simpler */}
          <Modal
            isOpen={this.state.levelOver}
            className="levelModal levelOverModal"
          >
            {this.state.msg || this.state.levelWon
              ? this.state.levelData.win
              : this.state.levelData.lose}
            <br />
            {this.state.levelWon && (
              <Link to={winTarget}>
                <button className="btn btn--primary">
                  <FormattedMessage id="nextLvl" defaultMessage="Next Level" />
                </button>
              </Link>
            )}
            <button className="btn" onClick={() => window.location.reload()}>
              <FormattedMessage
                id="restartLvl"
                defaultMessage="Restart Level"
              />
            </button>
            <button className="btn" onClick={() => this.closeEndModal()}>
              Explore
            </button>
            <div className="postDataWrap">
              <TreeMap
                level={this.state.levelData.level}
                levelOver={this.state.levelOver}
                nodeList={this.state.levelNodes}
              />
              <div>
                <ForceGraph
                  width={550}
                  height={550}
                  locale={this.state.locale}
                  trophicDisplay={this.state.trophicDisplay}
                  colors={enLists.colors}
                  nodes={
                    this.state.nodeHistory.length && [
                      ...this.state.nodeHistory[this.state.historyStep],
                    ]
                  }
                  edges={
                    this.state.edgeHistory.length && [
                      ...this.state.edgeHistory[this.state.historyStep],
                    ]
                  }
                  onNodeHover={this.handleNodeHover}
                  onRightClick={this.handleRightClick}
                  name="postGameGraph"
                  historyStep={this.state.historyStep}
                />
                <button
                  class="btn"
                  onClick={() => {
                    this.state.historyStep > 0 &&
                      this.setState({
                        historyStep: this.state.historyStep - 1,
                      });
                  }}
                >
                  -
                </button>
                <button
                  class="btn"
                  onClick={() => {
                    this.state.historyStep <
                      this.state.nodeHistory.length - 1 &&
                      this.setState({
                        historyStep: this.state.historyStep + 1,
                      });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </Modal>
          <SideBar
            onToggleModal={this.swapModal}
            locale={this.state.locale}
            onToggleTrophic={this.toggleTrophic}
            onSimulateDisturbance={this.simulateDisturbance}
            level={this.state.level}
            data={this.state.hoveredNode}
            difficulty={this.props.match.params.difficulty}
          />
          <MainGraph
            levelData={this.state.levelData}
            locale={this.state.locale}
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
            reqSpecies={this.state.reqSpecies}
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
            locale={this.state.locale}
          />
        </div>
      </IntlProvider>
    );
  }
}

export default Game;
