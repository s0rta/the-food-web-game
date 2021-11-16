import React from "react";
import ForceGraph from "./ForceGraph";
import Plot from "./Plot";

import ServiceCount from "./ServiceCount";

class SubGraphs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      n: 1,
      seed: this.props.seed,
      trophicDisplay: true,
      displayed: false,
      flowIn: true,
      flowOut: true,
    };
  }

  componentDidUpdate(oldState) {
    if (oldState.seed !== this.props.seed) {
      this.setState({
        seed: this.props.seed,
        trophicDisplay: false,
        displayed: true,
      });
    }
  }

  handleNodeHover = (d) => {
    this.props.onNodeHover(d);
  };

  decN = () => {
    if (this.state.n > 1) {
      this.setState({
        n: this.state.n - 1,
        seed: Math.random(),
        trophicDisplay: false,
      });
    }
  };

  incN = () => {
    if (this.state.n < 3) {
      this.setState({
        n: this.state.n + 1,
        seed: Math.random(),
        trophicDisplay: false,
      });
    }
  };

  swapFlowIn = () => {
    this.setState({
      flowIn: !this.state.flowIn,
      seed: Math.random(),
      trophicDisplay: false,
    });
  };

  swapFlowOut = () => {
    this.setState({
      flowOut: !this.state.flowOut,
      seed: Math.random(),
      trophicDisplay: false,
    });
  };

  toggleTrophic = () => {
    this.setState({
      trophicDisplay: !this.state.trophicDisplay,
    });
  };

  handleLevelEnd = (d) => {
    this.props.onLevelEnd(d);
  };

  render() {
    return (
      <div className="sub-graph-wrap">
        {this.props.step === 0 && (
          <div className="sub-force-graph container">
            <ForceGraph
              trophic={this.state.trophicDisplay}
              onNodeHover={this.handleNodeHover}
              epiNode={this.props.epiNode}
              n={this.state.n}
              flowIn={this.state.flowIn}
              flowOut={this.state.flowOut}
              width={350}
              height={250}
              seed={this.state.seed}
              colors={this.props.colors}
              nodes={this.props.nodes}
              edges={this.props.edges}
              name="sub-graph"
            />{" "}
            {this.state.displayed && (
              <div className="sub-graph-inputs">
                <span>Levels of Separation: {this.state.n}</span>
                <button class="btn" onClick={this.decN}>
                  -
                </button>
                <button class="btn" onClick={this.incN}>
                  +
                </button>
                <br />
                <input
                  type="checkbox"
                  value="Energy In"
                  onClick={this.swapFlowIn}
                  checked
                />
                Energy Flow In
                <input
                  type="checkbox"
                  value="Energy Out"
                  onClick={this.swapFlowOut}
                  checked
                />
                Energy Flow Out
                <br />
                <button class="btn" onClick={this.toggleTrophic}>
                  Toggle Trophic
                </button>
              </div>
            )}
          </div>
        )}
        <br />
        <div className="plots">
          <ServiceCount
            onLevelEnd={this.handleLevelEnd}
            biomass={this.props.esBiomass}
            display={this.props.levelData.shownGraphs.includes("num-services")}
            pos={this.props.esBiomass[0]}
          />
          <Plot
            yAxis="Percent of species remaining in food web"
            name="Species Remaining"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="species-remaining"
            index={1}
            failLine={70}
            display={this.props.levelData.shownGraphs.includes(
              "species-remaining"
            )}
            pos={this.props.speciesRemaining}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Wave Attenuation"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="wave-attenuation"
            index={350}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "wave-attenuation"
            )}
            pos={this.props.esBiomass[0]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Shoreline Protection"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="shoreline-protection"
            index={450}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "shoreline-protection"
            )}
            pos={this.props.esBiomass[1]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Carbon Storage"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="carbon-storage"
            index={550}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "carbon-storage"
            )}
            pos={this.props.esBiomass[2]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Water Filtration"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="water-filtration"
            index={650}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "water-filtration"
            )}
            pos={this.props.esBiomass[3]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Commercial Fishery"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="commercial-fishery"
            index={750}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "commercial-fishery"
            )}
            pos={this.props.esBiomass[4]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Bird Watching"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="bird-watching"
            index={850}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes("bird-watching")}
            pos={this.props.esBiomass[5]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Waterfowl Hunting"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="waterfowl-hunting"
            index={950}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "waterfowl-hunting"
            )}
            pos={this.props.esBiomass[6]}
          />
          <Plot
            yAxis="Amount of ecosystem service left"
            name="Recreational Fishery"
            onLevelEnd={this.handleLevelEnd}
            step={this.props.step}
            id="recreational-fishery"
            index={1050}
            failLine={50}
            display={this.props.levelData.shownGraphs.includes(
              "recreational-fishery"
            )}
            pos={this.props.esBiomass[7]}
          />
        </div>
        <div className="legend container">
          <div className="directions">
            <p>Directions</p>
            <p>Hover over species to get more information, including what they might be vunerable to.</p>
            <p>Right click a species (or ecosystem service) to look at its predators and prey more closely.</p>
            <p>Left click a species to protect it against the direct effects of the disturbance.</p>
            <p>Toggle trophic display to get a new perspective.</p>
            <p>Once your ready, (protected as many species as allowed), simulate the distrbance to see if you won!</p>
          </div>
          <p>Key</p>
          <div className="legend-elm-wrap">
            Species Interaction <div className="si legend-elm"></div>
          </div>
          <div className="legend-elm-wrap">
            Service Species Interaction<div className="ssi legend-elm"></div>
          </div>
          <div className="legend-elm-wrap">
            Ecosystem Service <div className="eco-serve legend-elm"></div>
          </div>
          <div className="legend-elm-wrap">
            Mammel <div className="mammel legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Microscopic Organism{" "}
            <div className="micro-org legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Crustacean{" "}
            <div className="crustacean legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Plant <div className="plant legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Bird <div className="bird legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Insect, Annelid & Arachnid{" "}
            <div className="insect legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Fish <div className="fish legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Plankton <div className="plankton legend-elm legend-species"></div>
          </div>
          <div className="legend-elm-wrap">
            Mollusc <div className="mollusc legend-elm legend-species"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubGraphs;
