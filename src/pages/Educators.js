import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const pageInSpanish = {
  h1: "spanish h1",
  p1: "first spanish paragraph",
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
          <p><FormattedMessage id="p1" defaultMessage={`We published a lesson plan associated with this video game that can be found on CourseSource.`} /></p> 
        </div>
      </div>
    </IntlProvider>
  );
}

export default Educators;
