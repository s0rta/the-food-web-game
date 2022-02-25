import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import ForceGraph from "./ForceGraph";
import Plot from "./Plot";

import ServiceCount from "./ServiceCount";

const componentInSpanish = {
  los: "Levels of Separation spanish",
  efl: "energy flow in spanish",
  efo: "energy flow out spanish",
  tt: "toggle trophic spanish",
  dirs: "spanish directions",
  key: "spanish key",
  si: "spanish species Interaction",
  ssi: "spanish service species Interaction",
  es: "spanish ecosystem service",
  m: "spanish mammal",
  mo: "spanish Microscopic Organism",
  c: "spanish crustacean",
  p: "spanish plant",
  b: "spanish bird",
  iaa: "spanish insect &c.",
  f: "spanish fish",
  p: "spanish plankton",
  mol: "spanish mollusc",
};

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

  handleLevelLost = (d) => {
    this.props.onLevelLost(d);
  };

  render() {
    return (
      <IntlProvider
        messages={this.props.locale === "es" ? componentInSpanish : ""}
        defaultLocale="en"
        locale={this.props.locale}
      >
        <div className="sub-graph-wrap">
          {this.props.step === 0 && this.props.seed && (
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
                name={this.props.locale === "es" ? "" : "sub-graph"}
                locale={this.props.locale}
              />{" "}
              {this.state.displayed && (
                <div className="sub-graph-inputs">
                  <span>
                    <FormattedMessage
                      id="los"
                      defaultMessage="Levels of Separation"
                    />
                    : {this.state.n}
                  </span>
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
                  <FormattedMessage id="efl" defaultMessage="Energy Flow In" />
                  <input
                    type="checkbox"
                    value="Energy Out"
                    onClick={this.swapFlowOut}
                    checked
                  />
                  <FormattedMessage id="efo" defaultMessage="Energy Flow Out" />
                  <br />
                  <button class="btn" onClick={this.toggleTrophic}>
                    <FormattedMessage id="tt" defaultMessage="Toggle Trophic" />
                  </button>
                </div>
              )}
            </div>
          )}
          <br />
          <div className={this.props.levelOver ? "plots" : "plotsHidden"}>
            <ServiceCount
              locale={this.props.locale}
              onLevelLost={this.handleLevelLost}
              biomass={this.props.esBiomass}
              display={this.props.levelData.shownGraphs.includes(
                "num-services"
              )}
              pos={this.props.esBiomass[0]}
            />
            <Plot
              locale={this.props.locale}
              yAxis={
                this.props.locale === "es"
                  ? ""
                  : "% of species remaining in food web"
              }
              name={this.props.locale === "es" ? "" : "Species Remaining"}
              onLevelLost={this.handleLevelLost}
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
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Wave Attenuation"}
              onLevelLost={this.handleLevelLost}
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
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Shoreline Protection"}
              onLevelLost={this.handleLevelLost}
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
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Carbon Storage"}
              onLevelLost={this.handleLevelLost}
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
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Water Filtration"}
              onLevelLost={this.handleLevelLost}
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
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Commercial Fishery"}
              onLevelLost={this.handleLevelLost}
              step={this.props.step}
              requiredSpecies="fish"
              id="commercial-fishery"
              index={750}
              failLine={50}
              display={this.props.levelData.shownGraphs.includes(
                "commercial-fishery"
              )}
              pos={this.props.esBiomass[4]}
            />
            <Plot
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Bird Watching"}
              onLevelLost={this.handleLevelLost}
              step={this.props.step}
              id="bird-watching"
              index={850}
              failLine={50}
              display={this.props.levelData.shownGraphs.includes(
                "bird-watching"
              )}
              pos={this.props.esBiomass[5]}
            />
            <Plot
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Waterfowl Hunting"}
              onLevelLost={this.handleLevelLost}
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
              yAxis={
                this.props.locale === "es" ? "" : "% of ecosystem service left"
              }
              name={this.props.locale === "es" ? "" : "Recreational Fishery"}
              onLevelLost={this.handleLevelLost}
              step={this.props.step}
              id="recreational-fishery"
              requiredSpecies="fish"
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
              <FormattedMessage
                id="dirs"
                defaultMessage="
              <p><u>Directions</u></p>
              <p><u>Hover over species</u> to get more information, including what they might be vunerable to.</p>
              <p><u>Right click a species (two finger click on laptop)</u> (or ecosystem service) to look at its predators and prey more closely.</p>
              <p><u>Left click a species</u> to protect it against the direct effects of the disturbance.</p>
              <p><u>Toggle trophic</u> display to get a new perspective.</p>
              <p>Once your ready, (protected as many species as allowed), <u>simulate the distrbance</u> to see if you won!</p>
              "
                values={{
                  p: (...msg) => <p>{msg}</p>,
                  u: (...msg) => <u>{msg}</u>,
                }}
              />
            </div>
            <p>
              <u>
                <FormattedMessage id="key" defaultMessage="Key" />
              </u>
            </p>
            <div className="legend-elm-wrap">
              <FormattedMessage id="si" defaultMessage="Species Interaction " />
              <div className="si legend-elm"></div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage
                id="ssi"
                defaultMessage="Service Species Interaction"
              />
              <div className="ssi legend-elm"></div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="es" defaultMessage="Ecosystem Service" />{" "}
              <div className="eco-serve legend-elm"></div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="m" defaultMessage="Mammal" />
              <div className="mammal legend-elm legend-species">
                <img src="/Node-Icons/mammel-icon.svg" alt="" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="mo" defaultMessage="Microscopic Organism" />{" "}
              <div className="micro-org legend-elm legend-species">
                <img src="/Node-Icons/microscopic-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="c" defaultMessage="Crustacean" />{" "}
              <div className="crustacean legend-elm legend-species">
                <img src="/Node-Icons/crustacean-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="p" defaultMessage="Plant " />
              <div className="plant legend-elm legend-species">
                <img src="/Node-Icons/plant-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="b" defaultMessage="Bird " />
              <div className="bird legend-elm legend-species">
                <img src="/Node-Icons/bird-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage
                id="iaa"
                defaultMessage="Insect, Annelid & Arachnid"
              />{" "}
              <div className="insect legend-elm legend-species">
                <img src="/Node-Icons/insect-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="f" defaultMessage="Fish" />
              <div className="fish legend-elm legend-species">
                <img src="/Node-Icons/fish-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="p" defaultMessage="Plankton" />
              <div className="plankton legend-elm legend-species">
                <img src="/Node-Icons/plankton-icon.svg" />
              </div>
            </div>
            <div className="legend-elm-wrap">
              <FormattedMessage id="mol" defaultMessage="Mollusc & Snail " />
              <div className="mollusc legend-elm legend-species">
                <img src="/Node-Icons/mollusc-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default SubGraphs;
