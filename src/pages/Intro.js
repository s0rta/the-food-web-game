import React from "react";
import { Link } from "react-router-dom";

import "./Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Concept Review</h1>
          <br />
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSa2DU57gUdOCvO4oN9v1lAZKNSOUP1IJuYIHJwqbEdlAc-ltic_qmo2kzx6DW3z8z6os5PcP4rTCzw/embed?start=true&loop=false&delayms=600000" frameborder="0" width="1176" height="691" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>{" "}
          <br />
          <Link to="/tutorial">
            <button class="btn--primary">Go to Tutorial</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
