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
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQVj-gvBCddOlU0exsiBJM_PCxX7wsGbitrdN9AxKfCR0J4gAJNKSyJzUEMtBci7JAC1Y3--NyGRXtA/embed?start=false&loop=false&delayms=600000"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>{" "}
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
