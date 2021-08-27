import React from "react";
import { Link } from "react-router-dom";

import "./MainMenu.css";

class Intro extends React.Component {
  render() {
    return (
      <div className="introWrap">
        <div>
          <h1>Welcome to The Salt Marsh Game</h1>
          <p>
            Here is a quick introduction to the concepts being covered in this
            game.
          </p>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQVj-gvBCddOlU0exsiBJM_PCxX7wsGbitrdN9AxKfCR0J4gAJNKSyJzUEMtBci7JAC1Y3--NyGRXtA/embed?start=false&loop=false&delayms=600000"
            frameborder="0"
            width="1186"
            height="691"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>{" "}
          <br />
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTjnHXWNPf4VVlDN5pzfd6dUdSzjb4CDzbXN7VBDRRK-j3J_O0xW0-6nzktj0I2AA/embed?start=true&loop=false&delayms=600000"
            frameborder="0"
            width="1186"
            height="691"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>{" "}
          <br />
          <Link to="/game/1">
            <button>Start Game</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;

