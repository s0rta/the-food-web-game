import React from 'react';

import { Link } from "react-router-dom"

import { IntlProvider, FormattedMessage } from 'react-intl';

import "./LevelSelect.css"

const pageInSpanish = {
  h1: 'spanish h1',
  div1: 'spanish div'
}


class LevelSelect extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const locale = this.props.match.params.language;
    console.log(locale);
    return (
      <IntlProvider messages={locale === 'es' ? pageInSpanish : ''} defaultLocale="en" locale={locale}>
        <div className="level-select">
          <h1><FormattedMessage id="h1" defaultMessage="Level Select" /></h1>
          <div className="levels">
            <Link to="/intro">
              <div className="level"><FormattedMessage id="div1" defaultMessage="Intro" /></div>
            </Link>
            <Link to={`/game/1/${locale}`}>
              <div className="level">1</div>
            </Link>
            <Link to={`/game/2/${locale}`}>
              <div className="level">2</div>
            </Link>
            <Link to={`/game/3/${locale}`}>
              <div className="level">3</div>
            </Link>
            <Link to={`/game/4/${locale}`}>
              <div className="level">4</div>
            </Link>
            <Link to={`/game/5/${locale}`}>
              <div className="level">5</div>
            </Link>
            <Link to={`/game/6/${locale}`}>
              <div className="level">6</div>
            </Link>
            <Link to={`/game/7/${locale}`}>
              <div className="level">7</div>
            </Link>
          </div>

        </div>
      </IntlProvider>
    )
  }
}

export default LevelSelect;
