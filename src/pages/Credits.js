import React from "react";

import "./credits.css";
import { imgCredit } from "../data/lists";

class Credits extends React.Component {
  render() {
    return (
      <div className="copy-wrap">
        <div className="container">
          <h1>Credits</h1>
          <h2>
            Acknowledgements
          </h2>
          <p>We thank members of the Dee Lab, the Principles of Ecology students at the University of Colorado Boulder, and friends and family for providing feedback on earlier drafts of the game. We also thank S. McCarthy, M. Mosher, A. Cohen-Leadholm and their high school students for piloting this learning module in their classes and providing feedback on earlier drafts of this learning module. This work was supported by microgrants from the University of Colorado Office of Outreach and Engagement and the National Science Foundation.</p>
          <h2>Contributions</h2>
          <p>
            <a href="https://aislynkeyes.weebly.com/">A. Keyes</a>{" "}
            led the design and development of the game with the help of J. Wright,{" "}
            <a href="https://www.lauraedee.com">L. Dee</a>{" "} and{" "}
            <a href="https://larremorelab.github.io/">D. Larremore.</a>{" "}
            J. Wright programmed the entire game. A. Keyes developed the lesson plan and assessment materials with guidance from{" "}
            <a href="https://www.colorado.edu/lab/corwin-reach/">L. Corwin</a>{" "} and L. Dee.
          </p>
          <h2>Icon Credit</h2>
          <p>Icons were collected from the Noun Project with creative commons usage rights.</p>

          <h2>Image Credits</h2>
          <p>Images were collected from various photographers with creative commons usage rights.</p>
          <div class="image-credits">
            {imgCredit.map((value, index) => {
              return (
                <div key={index}>
                  <img
                    src={`/img/Images/${value.imgFile}`}
                    alt={value.imgCaption}
                  />{" "}
                  <p>
                    {value.imgSource}<br /> {value.imgLiscence}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Credits;
