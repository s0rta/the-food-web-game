import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

import "./MainMenu.css";

const pageInSpanish = {
  h1: "spanish h1",
  h1Subhead: "spanish subhead",
  p1: "paragraph1 spanish",
  p2: "paragraph2 spanish",
  p3: "paragraph3 spanish",
  p4: "paragraph4 spanish",
};

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const locale = this.props.language;
    return (
      <IntlProvider
        messages={locale === "es" ? pageInSpanish : ""}
        locale={locale}
        defaultLocale="en"
      >
        <div className="main-menu-wrap copy-wrap">
          <div className="main-menu container">
            <div className="header-wrap ">
              <div class="header-text">
                <img class="header-img" src="/img/home.jpg" />
                <h1>
                  <FormattedMessage
                    id="h1"
                    defaultMessage="The Food Web Game"
                  />
                </h1>
                <p class="h1-subhead">
                  <FormattedMessage
                    id="h1Subhead"
                    defaultMessage="A game about conserving complex food webs and their ecosystem services"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="p1"
                    defaultMessage="Coastal ecosystems are full of diverse, marine life and are vitally important around the world. These ecosystems provide a wide range of benefits to people, including shoreline protection, fishery production and water filtration. These benefits are known as ecosystem services. Unfortunately, coastal ecosystems and the services they provide are threatened—warming waters, rising sea levels, invasive species, and pollution are only a few of the threats that these ecosystems face."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="p2"
                    defaultMessage="Conservation aims to protect these species and maintain ecosystem services, but resources are limited. We do not have unlimited money, human power or time; and we need to decide which species to prioritize. In this learning module, you will learn more about coastal ecosystems and the threats they face; and you will develop skills to balance uncertainty and complexity."
                  />{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="main-menu container"
            style={{ marginTop: "16px", paddingTop: "24px" }}
          >
            <div className="header-wrap ">
              <div class="header-text">
                <p>
                  <FormattedMessage
                    id="p3"
                    defaultMessage={`<b>Here to just play the game?</b> If
                    it’s your first time, we suggest starting with the 
                    ‘Introduction to key concepts’ and ‘Game tutorial’ pages
                    (found under the Play Game tab) before jumping into the game. 
                    There are two difficulty levels for this game. The ‘Rocky Intertidal Zone’ 
                    is the easier version and the ‘Salt Marsh’.`}
                    values={{
                      b: (...chunk) => <b>{chunk}</b>,
                    }}
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="p4"
                    defaultMessage="<b>Are you an educator looking to use this game in your classroom?</b> You’ll find lesson plans, activities and assessments on the ‘Educators’ page."
                    values={{
                      b: (...chunk) => <b>{chunk}</b>,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default MainMenu;
