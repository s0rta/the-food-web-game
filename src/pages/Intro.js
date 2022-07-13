import React from "react";
import { Link } from "react-router-dom";

import { IntlProvider, FormattedMessage } from "react-intl";

import "./Intro.css";

const pageInSpanish = {
  h1: "spanish h1",
  p1: "spanish paragraph 1 <a>spanish link</a>",
  button1: "spanish button1",
};

const locale = "en";

class Intro extends React.Component {
  render() {
    return (
      <IntlProvider
        messages={locale === "es" ? pageInSpanish : ""}
        locale={locale}
        defaultLocale="en"
      >
        <div className="container copy-wrap intro-wrap">
          <div>
            <h1>
              <FormattedMessage id="h1" defaultMessage="Concept Review" />
            </h1>
            <br />
            <p>
              <FormattedMessage
                id="p1"
                defaultMessage="Want to learn more about these concepts? Take a look at some other resources <a>here</a>."
                values={{
                  a: (...msg) => (
                    <a href="https://docs.google.com/document/d/1IOuqp2WvqI5EW74VEpF7wfVcl2JYgCLKLGxi9XZHvxg/edit">
                      {msg}
                    </a>
                  ),
                }}
              />
            </p>
            <br />
            {locale === "es" ? (
              <div>spanish iframe</div>
            ) : (
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSa2DU57gUdOCvO4oN9v1lAZKNSOUP1IJuYIHJwqbEdlAc-ltic_qmo2kzx6DW3z8z6os5PcP4rTCzw/embed?start=true&loop=false&delayms=600000"
                frameborder="0"
                width="1176"
                height="691"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            )}{" "}
            <br />
            <Link to={"/tutorial/" + locale}>
              <button class="btn--primary">
                <FormattedMessage
                  id="button1"
                  defaultMessage="Go to Tutorial"
                />
              </button>
            </Link>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default Intro;
