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
<iframe width="560" height="315" src="https://www.youtube.com/embed/AQiwBLUMrf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{" "}
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
