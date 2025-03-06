import React from "react";

import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from "react-intl";

import "./LevelSelect.css";

const pageInSpanish = {
  h1: "Selección de Nivel",
  div1: "Elige el nivel que quieres jugar",
};

class LevelSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const locale = this.props.match.params.language;
    const difficulty = this.props.match.params.difficulty;

    return (
      <IntlProvider
        messages={locale === "es" ? pageInSpanish : ""}
        defaultLocale="en"
        locale={locale}
      >
        <div className="copy-wrap">
          <div className="container level-select">
            <h1>
              <FormattedMessage id="h1" defaultMessage="Level Select" />
            </h1>
            <div className="levels">
              <Link to={`/game/demo/${difficulty}/${locale}`}>
                <button className="btn">0</button>
              </Link>
              <Link to={`/game/1/${difficulty}/${locale}`}>
                <button className="btn">1</button>
              </Link>
              <Link to={`/game/2/${difficulty}/${locale}`}>
                <button className="btn">2</button>
              </Link>
              <Link to={`/game/3/${difficulty}/${locale}`}>
                <button className="btn">3</button>
              </Link>
              <Link to={`/game/4/${difficulty}/${locale}`}>
                <button className="btn">4</button>
              </Link>
              <Link to={`/game/5/${difficulty}/${locale}`}>
                <button className="btn">5</button>
              </Link>
              {difficulty === "hard" && (
                <>
                  <Link to={`/game/6/${difficulty}/${locale}`}>
                    <button className="btn">6</button>
                  </Link>
                  <Link to={`/game/7/${difficulty}/${locale}`}>
                    <button className="btn">7</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default LevelSelect;
