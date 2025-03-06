import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";

import { Link } from "react-router-dom";

import "./SideBar.css";

const componentInSpanish = {
  h1: "Nivel",
  objectiveButton: "Mostrar objetivo",
  levelButton: "Seleccionar nivel",
  resetButton: "Reiniciar",
  simButton: "Simular perturbación",
  trophButton: "Vista trófica",
  cardBio: "Biomasa",
  cardType: "Tipo",
  cardTroph: "Nivel trófico",
};

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  isES = (name) => {
    const es =
      this.props.locale == "es"
        ? [
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
          ]
        : [];
    let transformed = name.toLowerCase().split("-").join(" ");
    return es.includes(transformed);
  };

  handleModal = (modal) => {
    this.props.onToggleModal(modal);
  };

  handleTrophicToggle = () => {
    this.props.onToggleTrophic();
  };

  handleSimulateDisturbance = () => {
    this.props.onSimulateDisturbance();
  };

  continueDemo = () => {
    this.props.continueDemo();
  };

  render() {
    return (
      <IntlProvider
        messages={this.props.locale === "es" ? componentInSpanish : ""}
        locale={this.props.locale}
        defaultLocale="en"
      >
        <div className="sidebar-wrap">
          <div class="container">
            {this.props.demoMode ? (
              <>
                <button
                  className="btn--primary btn--demo"
                  onClick={this.continueDemo}
                >
                  <FormattedMessage id="contButton" defaultMessage="Continue" />
                </button>
              </>
            ) : (
              <>
                <h1 class="level-header">
                  <FormattedMessage id="h1" defaultMessage="Level" />{" "}
                  <span id="level">{this.props.level}</span>
                </h1>
                <Link
                  to={
                    "/level-select/" +
                    this.props.difficulty +
                    "/" +
                    this.props.locale
                  }
                >
                  <button className="btn">
                    <FormattedMessage
                      id="levelButton"
                      defaultMessage="Level Select"
                    />
                  </button>
                </Link>

                <button
                  className="btn"
                  onClick={() => this.handleModal("glossary")}
                >
                  <FormattedMessage
                    id="glossaryButton"
                    defaultMessage="Show Glossary"
                  />
                </button>
                <button
                  className="btn"
                  onClick={() => this.handleModal("objective")}
                >
                  <FormattedMessage
                    id="objectiveButton"
                    defaultMessage="Show Objective"
                  />
                </button>
                <button
                  className="btn"
                  onClick={() => window.location.reload()}
                >
                  <FormattedMessage id="resetButton" defaultMessage="Reset" />
                </button>
                <button className="btn" onClick={this.handleTrophicToggle}>
                  <FormattedMessage
                    id="trophButton"
                    defaultMessage={`Trophic View ${
                      this.props.trophicDisplay ? "Off" : "On"
                    }`}
                  />
                </button>
                <button
                  className="btn--primary sim-button"
                  onClick={this.handleSimulateDisturbance}
                >
                  <FormattedMessage
                    id="simButton"
                    defaultMessage="Simulate Disturbance"
                  />
                </button>
              </>
            )}
          </div>
          <div className="container">
            {this.props.data ? (
              <div>
                <img
                  className="photo"
                  src={`/img/Images/${this.props.data.imgFile}`}
                  alt=""
                />
                <h2 className="name">
                  <span className="name-filler">
                    {this.props.data.nodeName}
                  </span>
                </h2>
                <p className="biomass">
                  <FormattedMessage id="cardBio" defaultMessage="Biomass" />:{" "}
                  <span className="biomass-filler">
                    {this.isES(this.props.data.nodeName)
                      ? "N/A"
                      : Math.max(0.01, this.props.data.biomass.toFixed(2))}
                  </span>
                </p>
                <p className="type">
                  <FormattedMessage id="cardType" defaultMessage="Type" />:{" "}
                  <span className="type-filler">
                    {this.props.data.organismType}
                  </span>
                </p>
                <p className="trophic">
                  <FormattedMessage
                    id="cardTrop"
                    defaultMessage="Trophic Level"
                  />
                  :{" "}
                  <span className="trophic-filler">
                    {this.props.data.trophicLevel.toFixed(2)}
                  </span>
                </p>
                <p className="desc">{this.props.data.desc}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default SideBar;
