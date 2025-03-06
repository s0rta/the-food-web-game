import React from "react";
import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from "react-intl";

import "./Intro.css";

const pageInSpanish = {
  h1: "Tutorial",
  p1: "En este juego, usarás información sobre especies y sus interacciones para decidir qué especies proteger para mantener los servicios ecosistemáticos. Cada nivel se volverá más desafiante y se centrará en un servicio ecosistemático diferente. Mira este video corto para aprender a jugar.",
  button1: "Jugar “Zona Intermareal Rocosa” (Fácil)",
  button2: "Jugar nivel “Salinas” (Difícil)",
};

class Tutorial extends React.Component {
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
        <div className="container copy-wrap">
          <div>
            <h1>
              <FormattedMessage id="h1" defaultMessage="Tutorial" />
            </h1>
            <br />
            <p>
              <FormattedMessage
                id="p1"
                defaultMessage="In this game, you will use information about species and their interactions to decide which species to protect to maintain ecosystem services. Each level will get progressively more challenging and will focus on a different ecosystem service. Watch this short video to learn how to play."
              />
            </p>
            <br />
            {locale === "es" ? (
              <div>spanish iframe</div>
            ) : (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AQiwBLUMrf0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}{" "}
            <br />
            <Link to={"/game/1/easy/" + locale}>
              <button class="btn--primary" style={{ marginRight: "8px" }}>
                <FormattedMessage
                  id="button1"
                  defaultMessage="Start Rocky Innertidal Levels"
                />
              </button>
            </Link>
            <Link to={"/game/1/hard/" + locale}>
              <button class="btn--primary">
                <FormattedMessage
                  id="button2"
                  defaultMessage="Start Salt Marsh Levels"
                />
              </button>
            </Link>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Tutorial;
