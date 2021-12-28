import React from "react";
import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from 'react-intl';

import { Button, Wrapper, Menu, MenuItem } from "react-aria-menubutton";

import "./Nav.css";

const pageInSpanish = {
  homeLink: "sl1",
  educatorsLink: "sl2",
  glossaryLink: "sl3",
  creditsLink: "sl4",
  contactLink: "sl5",
  playButton: "sbutton",
  introDop: "sIntro",
  tutorialDrop: "sTut",
  rockyDrop: "sRocky",
  saltDrop: "sSalt"
}


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const locale = this.props.language;
    return (
      <IntlProvider messages={locale === "es" ? pageInSpanish : ""} locale={locale} defaultLocale="en">
        <div class="nav-bar">
          <div class="left-nav">
            <Link to={"/" + locale} className="nav-title nav-elm">
              <FormattedMessage id="homeLink" defaultMessage="The Food Web Game" />
            </Link>
            <Link to={"/for-educators/" + locale} className="nav-elm">
              <FormattedMessage id="educatorsLink" defaultMessage="For Educators" />
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
            <Wrapper className="playMenuButton">
              <Button className="btn--nav btn btn--secondary">
                <FormattedMessage id="playButton" defaultMessage="Play Game" />
              </Button>
              <Menu className="playMenuButton-menu">
                <ul>
                  <li key="2">
                    <Link to={"/intro/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage id="introDop" defaultMessage="Introduction to Key Concepts" />
                      </MenuItem>
                    </Link>
                  </li>
                  <li key="3">
                    <Link to={"/tutorial/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage id="tutorialDrop" defaultMessage="Tutorial" />
                      </MenuItem>
                    </Link>
                  </li>
                  <li key="1">
                    <Link to={"/"}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage id="rockyDrop" defaultMessage="Play Rocky Inner Tidal (Coming soon) (Easy)" />
                      </MenuItem>
                    </Link>
                  </li>

                  <li key="0">
                    <Link to={"/level-select/" + locale}>
                      <MenuItem className="playMenuButton-menuItem">
                        <FormattedMessage id="saltDrop" defaultMessage="Play Salt Marsh (Hard)" />
                      </MenuItem>
                    </Link>
                  </li>
                </ul>
              </Menu>
            </Wrapper>
          </div>
        </div>
      </IntlProvider >
    );
  }
}

export default Nav;
