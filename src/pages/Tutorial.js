import React from "react";
import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from 'react-intl';

import "./Intro.css";

const pageInSpanish = {
  h1: 'spanish h1',
  p1: 'spanish p1',
  button1: 'spanish button'
}

const locale = "en"

class Tutorial extends React.Component {
  render() {
    return (
      <IntlProvider messages={locale === 'es' ? pageInSpanish : ""} locale={locale} defaultLocale="en" >
        <div className="container copy-wrap">
          <div>
            <h1><FormattedMessage id="h1" defaultMessage="Tutorial" /></h1>
            <br />
            <p><FormattedMessage id="p1" defaultMessage="In this game, you will use information about species and their interactions to decide which species to protect to maintain ecosystem services. Each level will get progressively more challenging and will focus on a different ecosystem service. Watch this short video to learn how to play." /></p>
            <br />
            {locale === 'es' ? <div>spanish iframe</div> : <iframe width="560" height="315" src="https://www.youtube.com/embed/AQiwBLUMrf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            {" "}
            <br />
            <Link to="/game/1">
              <button class="btn--primary"><FormattedMessage id="button1" defaultMessage="Start Game" /></button>
            </Link>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Tutorial;
