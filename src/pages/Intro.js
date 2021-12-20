import React from "react";
import { Link } from "react-router-dom";

import "./Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div className="container copy-wrap">
        <div>
          <h1>Concept Review</h1>
          <br />
          <p>Want to learn more about these concepts? Take a look at some other resources <a href="https://docs.google.com/document/d/1IOuqp2WvqI5EW74VEpF7wfVcl2JYgCLKLGxi9XZHvxg/edit">here.</a></p>
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
