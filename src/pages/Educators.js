import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const pageInSpanish = {
  h1: "Para Educadores",
  p1: "Hemos publicado un plan de estudio asociado a este juego de video que se puede encontrar en CourseSource.",
};

const locale = "en";

function Educators() {
  return (
    <IntlProvider
      messages={locale === "es" ? pageInSpanish : ""}
      defaultLocale="en"
    >
      <div className="educators-wrap copy-wrap">
        <div className="container">
          <h1>
            <FormattedMessage id="h1" defaultMessage="For Educators" />
          </h1>
          <p>
            <FormattedMessage
              id="p1"
              defaultMessage={`We published a lesson plan associated with this video game that can be found on CourseSource.`}
            />
          </p>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Educators;
