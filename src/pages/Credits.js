import React from "react";

import "./credits.css";
import { imgCredit } from "../data/lists";
import { FormattedMessage, IntlProvider } from "react-intl";

const pageInSpanish = {
  h1: "spanish h1",
  h21: "spanish h2",
  h21subhead: "spanish h2 subhead",
  contr: "<a>spanish contributions</a>",
  h22: "spanish h2",
  h22subhead: "spanish h2 subhead",
  h23: "spanish h2",
  h23subhead: "spanish h2 subhead",
  h24: "spanish h2",
  h24subhead: "spanish h2 subhead",
};

class Credits extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const locale = this.props.match.params.language;
    return (
      <IntlProvider
        messages={locale === "es" ? pageInSpanish : ""}
        locale={locale}
        defaultLocale="en"
      >
        <div className="copy-wrap">
          <div className="container">
            <h1>
              <FormattedMessage id="h1" defaultMessage="Credits" />
            </h1>
            <h2>
              <FormattedMessage id="h21" defaultMessage="Acknowledgements" />
            </h2>
            <p>
              <FormattedMessage
                id="h21subhead"
                defaultMessage={`We thank members of the Dee Lab, the Principles of Ecology students at the University of Colorado Boulder, and friends and family for providing feedback on earlier drafts of the game. We also thank A. Cohen-Leadholm and his students for piloting this learning module in their classes and providing feedback on earlier drafts of this learning module. This work was supported by microgrants from the University of Colorado Office of Outreach and Engagement and the funding from the University of Colorado Undergraduate Research Opportunities Program. We also acknowledge support from the National Science Foundation Biological Oceanography program, grant #2049360 to Laura Dee: Collaborative Research: The consequences of species loss for food web persistence and functioning in the Gulf of Maine rocky intertidal.`}
              />
              <br />
              <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2049360">
                https://www.nsf.gov/awardsearch/showAward?AWD_ID=2049360
              </a>
            </p>
            <h2>
              <FormattedMessage id="h22" defaultMessage="Contributions" />
            </h2>
            <p>
              <FormattedMessage
                id="contr"
                defaultMessage={`
              <a1>A. Keyes</a1> led the
              design and development of the game with the help of J. Wright,
              <a2>L. Dee</a2> and 
              <a3>D. Larremore.</a3> J.
              Wright programmed the entire game. A. Keyes developed the lesson
              plan and assessment materials with guidance from
              <a4>L. Corwin</a4>,
              <a5>L. Dee</a5> and <a6>K. Davies</a6>. Mariana Bastias translated the entire game and all of the lesson materials.`}
                values={{
                  a1: (...msg) => (
                    <a href="https://aislynkeyes.weebly.com/">{msg}</a>
                  ),
                  a2: (...msg) => <a href="https://www.lauraedee.com">{msg}</a>,
                  a3: (...msg) => (
                    <a href="https://larremorelab.github.io/">{msg}</a>
                  ),
                  a4: (...msg) => (
                    <a href="https://www.colorado.edu/lab/corwin-reach/">
                      {msg}
                    </a>
                  ),
                  a5: (...msg) => (
          <a href="https://www.lauraedee.com">{msg}</a>
        ),
                  a6: (...msg) => (
                    <a href="https://www.colorado.edu/lab/davies/">{msg}</a>
                  ),
                }}
              />
            </p>
            <h2>
              <FormattedMessage id="h23" defaultMessage="Icon Credit" />
            </h2>
            <p>
              <FormattedMessage
                id="h23subhead"
                defaultMessage={`
              Icons were collected from the Noun Project with creative commons
              usage rights.`}
              />
            </p>

            <h2>
              <FormattedMessage id="h24" defaultMessage="Image Credits" />
            </h2>
            <p>
              <FormattedMessage
                id="h24subhead"
                defaultMessage={`
              Images were collected from various photographers with creative
              commons usage rights.`}
              />
            </p>
            <div class="image-credits">
              {imgCredit.map((value, index) => {
                return (
                  <div key={index}>
                    <img
                      src={
                        value.ImageFile.includes(".svg")
                          ? `/Node-Icons/${value.ImageFile}`
                          : `/img/Images/${value.ImageFile}`
                      }
                      style={
                        value.ImageFile.includes(".svg")
                          ? { filter: "invert(0.5)" }
                          : {}
                      }
                    />{" "}
                    <p>
                      {value.ImageSource}
                      <br /> {value.ImageLiscence}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Credits;
