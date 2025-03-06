import React from "react";
import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from "react-intl";

import { Button, Wrapper, Menu, MenuItem } from "react-aria-menubutton";

import "./Nav.css";

const pageInSpanish = {
  homeLink: "Inicio",
  educatorsLink: "Educadores",
  glossaryLink: "Glosario",
  creditsLink: "Créditos",
  contactLink: "Contacto",
  playButton: "Jugar",
  introDop: "Introducción a los conceptos clave",
  tutorialDrop: "Tutorial del juego",
  rockyDrop: "Zona Intermareal Rocosa",
  saltDrop: "Salinas",
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this);
  }

  handleLanguageSwitch() {
    console.log("handleLanguageSwitch");
    const newLanguage = this.props.language === "en" ? "es" : "en";
    if (this.props.onLanguageChange) {
      this.props.onLanguageChange(newLanguage);
    }
  }

  render() {
    const locale = this.props.language;
    return (
      <IntlProvider
        messages={locale === "es" ? pageInSpanish : ""}
        locale={locale}
        defaultLocale="en"
      >
        <div class="nav-bar">
          <div class="left-nav">
            <Link to={"/" + locale} className="nav-title nav-elm">
              <FormattedMessage
                id="homeLink"
                defaultMessage="The Food Web Game"
              />
            </Link>
            <Link to={"/for-educators/" + locale} className="nav-elm">
              <FormattedMessage
                id="educatorsLink"
                defaultMessage="For Educators"
              />
            </Link>
            <Link to={"/glossary/" + locale} className="nav-elm">
              <FormattedMessage id="glossaryLink" defaultMessage="Glossary" />
            </Link>
            <Link to={"/credits/" + locale} className="nav-elm">
              <FormattedMessage id="creditsLink" defaultMessage="Credits" />
            </Link>
            <Link to={"/contact/" + locale} className="nav-elm">
              <FormattedMessage id="contactLink" defaultMessage="Contact" />
            </Link>
          </div>
          <div className="right-nav">
            <button
              onClick={this.handleLanguageSwitch}
              className="btn btn--secondary language-switch"
            >
              {locale === "en" ? "Español" : "English"}
            </button>
            <Wrapper className="playMenuButton">
              <Button className="btn--nav btn btn--secondary">
                <FormattedMessage id="playButton" defaultMessage="Play Game" />
              </Button>
              <Menu className="playMenuButton-menu">
                <ul>
                  <li key="2">
                    <Link to={"/intro/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage
                          id="introDop"
                          defaultMessage="Introduction to Key Concepts"
                        />
                      </MenuItem>
                    </Link>
                  </li>
                  <li key="3">
                    <Link to={"/tutorial/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage
                          id="tutorialDrop"
                          defaultMessage="Tutorial"
                        />
                      </MenuItem>
                    </Link>
                  </li>
                  <li key="1">
                    <Link to={"/level-select/easy/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage
                          id="rockyDrop"
                          defaultMessage="Play Rocky Innertidal (Easy)"
                        />
                      </MenuItem>
                    </Link>
                  </li>

                  <li key="0">
                    <Link to={"/level-select/hard/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage
                          id="saltDrop"
                          defaultMessage="Play Salt Marsh (Hard)"
                        />
                      </MenuItem>
                    </Link>
                  </li>
                </ul>
              </Menu>
            </Wrapper>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Nav;
