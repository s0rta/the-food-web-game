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
        <div className="copy-wrap">
          <div className="container level-select">
            <h1><FormattedMessage id="h1" defaultMessage="Level Select" /></h1>
            <div className="levels">
              <Link to="/intro">
                <button className="btn"><FormattedMessage id="div1" defaultMessage="Intro" /></button>
              </Link>
              <Link to={`/game/1/${locale}`}>
                <button className="btn">1</button>
              </Link>
              <Link to={`/game/2/${locale}`}>
                <button className="btn">2</button>
              </Link>
              <Link to={`/game/3/${locale}`}>
                <button className="btn">3</button>
              </Link>
              <Link to={`/game/4/${locale}`}>
                <button className="btn">4</button>
              </Link>
              <Link to={`/game/5/${locale}`}>
                <button className="btn">5</button>
              </Link>
              <Link to={`/game/6/${locale}`}>
                <button className="btn">6</button>
              </Link>
              <Link to={`/game/7/${locale}`}>
                <button className="btn">7</button>
              </Link>
            </div>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

export default LevelSelect;
