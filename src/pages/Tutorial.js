import React from "react";
import { Link } from "react-router-dom";

import "./Intro.css";

class Tutorial extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Tutorial</h1>
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
            <button class="btn--primary">Start Game</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Tutorial;
