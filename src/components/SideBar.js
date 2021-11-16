import React from "react";

import { Link } from "react-router-dom";

import "./SideBar.css";

class SideBar extends React.Component {
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
      "carbon storage",
    ];
    let transformed = name.toLowerCase().split("-").join(" ");
    return es.includes(transformed);
  };

  handleModal = () => {
    this.props.onToggleModal();
  };

  handleTrophicToggle = () => {
    this.props.onToggleTrophic();
  };

  handleSimulateDisturbance = () => {
    this.props.onSimulateDisturbance();
  }

  render() {
    return (
      <div className="sidebar-wrap">
        <div class="container">
          <h1 class="level-header">
            Level <span id="level">{this.props.level}</span>
          </h1>
          <button className="btn" onClick={this.handleModal}>
            Show Objective
          </button>
          <Link to="/level-select">
            <button className="btn">Level Select</button>
          </Link>
          <button className="btn" onClick={() => window.location.reload()}>Reset</button>
          <button className="btn" onClick={this.handleTrophicToggle}>
            Toggle Trophic
          </button>
          <button className="btn--primary" onClick={this.handleSimulateDisturbance}>Simulate Disturbance</button>
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
                <span className="name-filler">{this.props.data.nodeName}</span>
              </h2>
              <p className="biomass">
                Biomass:{" "}
                <span className="biomass-filler">
                  {this.isES(this.props.data.nodeName)
                    ? "N/A"
                    : this.props.data.biomass.toFixed(2)}
                </span>
              </p>
              <p className="type">
                Type:{" "}
                <span className="type-filler">
                  {this.props.data.organismType}
                </span>
              </p>
              <p className="trophic">
                Trophic Level:{" "}
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
    );
  }
}

export default SideBar;
