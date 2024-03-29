import React, { Component } from "react";

class ForceGraphSvgFramework extends Component {
  render() {
    return (
      <div className="force-wrap">
        <div id="map">
          <svg id={this.props.name}>
            <defs>
              <marker
                id="arrowhead"
                viewBox="-0 -5 10 10"
                refX="25"
                refY="0"
                orient="auto"
                markerWidth="13"
                markerHeight="13"
                xoverflow="visible"
              >
                <path d="M 0,-5 L 10 ,0 L 0,5" fill="#999"></path>
              </marker>
              <pattern
                id="bird-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#920000"
                ></circle>
                <image
                  className="bird-icon"
                  xlinkHref="/Node-Icons/bird-icon.svg"
                  x="1"
                  y="1"
                  width="28"
                  height="28"
                ></image>
              </pattern>

              <pattern
                id="crustacean-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                '
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#009292"
                ></circle>
                <image
                  className="crustacean-icon"
                  xlinkHref="/Node-Icons/crustacean-icon.svg"
                  x="1"
                  y="0"
                  width="28"
                  height="28"
                ></image>
              </pattern>
              <pattern
                id="fish-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#006ddb"
                ></circle>
                <image
                  className="fish-icon"
                  xlinkHref="/Node-Icons/fish-icon.svg"
                  x="0"
                  y="-3"
                  width="28"
                  height="28"
                ></image>
              </pattern>
              <pattern
                id="insect-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#490092"
                ></circle>
                <image
                  className="insect-icon"
                  xlinkHref="/Node-Icons/insect-icon.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="mammal-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#db6d00"
                ></circle>
                <image
                  className="mammel-icon"
                  xlinkHref="/Node-Icons/mammel-icon.svg"
                  x="2"
                  y="1"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="sea-urchin-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#E1BE6A"
                ></circle>
                <image
                  className="microscopic-icon"
                  xlinkHref="/Node-Icons/sea-urchin-icon.svg"
                  x="0"
                  y="2"
                  width="30"
                  height="30"
                ></image>
              </pattern>
              <pattern
                id="microscopic-organism-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#000"
                ></circle>
                <image
                  className="microscopic-icon"
                  xlinkHref="/Node-Icons/microscopic-icon.svg"
                  x="1"
                  y="2"
                  width="28"
                  height="28"
                ></image>
              </pattern>
              <pattern
                id="snail-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#004949"
                ></circle>
                <image
                  className="mollusc-icon"
                  xlinkHref="/Node-Icons/mollusc-icon.svg"
                  x="3"
                  y="3"
                  width="24"
                  height="24"
                ></image>
              </pattern>
              <pattern
                id="mollusc-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#004949"
                ></circle>
                <image
                  className="mollusc-icon"
                  xlinkHref="/Node-Icons/mollusc-icon.svg"
                  x="3"
                  y="3"
                  width="24"
                  height="24"
                ></image>
              </pattern>

              <pattern
                id="plankton-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#ffff6d"
                ></circle>
                <image
                  className="plankton-icon"
                  xlinkHref="/Node-Icons/plankton-icon.svg"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                ></image>
              </pattern>

              <pattern
                id="plant-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="16"
                  stroke="none"
                  fill="#24ff24"
                ></circle>
                <image
                  className="plant-icon"
                  xlinkHref="/Node-Icons/plant-icon.svg"
                  x="2"
                  y="3"
                  width="26"
                  height="26"
                ></image>
              </pattern>
              <pattern
                id="carbon-storage-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/co2.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="wave-attenuation-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/wave.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="birdwatching-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/bino.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="co2-service-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/co2.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="commercial-fishery-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/boat.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="recreational-fishery-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/hook.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="waterfowl-hunting-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/target.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="water-filtration-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/water_drop.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>

              <pattern
                id="shoreline-protection-node-icon"
                x="15"
                y="15"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  stroke="none"
                  fill="#ff6db6"
                ></rect>
                <image
                  className="service-icon"
                  xlinkHref="/Node-Icons/water_plant.svg"
                  x="2"
                  y="4"
                  width="26"
                  height="26"
                ></image>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
}

export default ForceGraphSvgFramework;
