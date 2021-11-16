import React from "react";
import { Link } from "react-router-dom";

import ForceGraph from "./ForceGraph";
import "./MainGraph.css";
class MainGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0,
      removed: 0,
      ticking: false,
      over: false,
      saves: this.props.levelData.saves,
      clockTicker: window.setInterval(() => {
        this.state.ticking && this.setState({ clock: this.state.clock + 1 });
      }, 1000),
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.gameStart && !this.state.ticking) {
      this.gameTick();
    }

    if (prevProps.levelOver !== this.props.levelOver) {
      this.setState({ ticking: false, over: true });
      window.clearInterval(this.state.clockTicker);
    }
  }

  handleNodeHover = (d) => {
    this.props.onNodeHover(d);
  };

  handleRightClick = (d, seed) => {
    this.props.onRightClick(d, seed);
  };

  handleESBiomass = (bioArr, step) => {
    this.props.onUpdateESBiomass(bioArr, step);
  };

  handleLevelEnd = (d) => {
    // this.setState({ticking: false})
    window.clearInterval(this.state.clockTicker);
    this.props.onLevelEnd(d);
  };

  handleSpeciesRemove = () => {
    this.setState({ removed: this.state.removed + 1 });
  };

  handleSpeciesRemaining = (count) => {
    this.props.onUpdateSpeciesRemaining(count);
  };

  gameTick = () => {
    this.setState({ ticking: true });
  };

  startNextLevel = () => {};

  render() {
    return (
      <div className="main-graph-wrap">
        <ForceGraph
          colors={this.props.colors}
          name="svgMain"
          width={window.innerWidth}
          height={window.innerHeight - 54}
          nodes={this.props.nodes}
          seed={0}
          edges={this.props.edges}
          levelData={this.props.levelData}
          trophic={this.props.trophicDisplay}
          onNodeHover={this.handleNodeHover}
          onUpdateSaves={(s) => this.setState({ saves: s })}
          onRightClick={this.handleRightClick}
          onUpdateESBiomass={this.handleESBiomass}
          onLevelEnd={this.handleLevelEnd}
          onSpeciesRemove={this.handleSpeciesRemove}
          onUpdateSpeciesRemaining={this.handleSpeciesRemaining}
          gameClock={this.state.clock}
        />

        <div className="controls">
          <div className="left">
            {this.state.clock === 0 && (
              <input
                type="button"
                value="Start Level"
                onClick={this.gameTick}
              />
            )}
            <button onClick={() => window.location.reload()}>
              Restart Level
            </button>
            {this.props.won && (
              <Link to={this.props.winTarget}>
                {" "}
                <input
                  type="button"
                  value="Next Level"
                  onClick={this.startNextLevel}
                />
              </Link>
            )}
            <p>Number of species you can protect: {this.state.saves}</p>
            <p>
              {this.state.removed} of {this.props.levelData.initialKills}{" "}
              species removed
            </p>
          </div>
          {/* <div className="legend"> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Species Interaction <div className="si legend-elm"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Service Species Interaction<div className="ssi legend-elm"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Ecosystem Service <div className="eco-serve legend-elm"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Mammel <div className="mammel legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Microscopic Organism{" "} */}
          {/*     <div className="micro-org legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Crustacean{" "} */}
          {/*     <div className="crustacean legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Plant <div className="plant legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Bird <div className="bird legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Insect, Annelid & Arachnid{" "} */}
          {/*     <div className="insect legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Fish <div className="fish legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Plankton{" "} */}
          {/*     <div className="plankton legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/*   <div className="legend-elm-wrap"> */}
          {/*     Mollusc <div className="mollusc legend-elm legend-species"></div> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default MainGraph;
