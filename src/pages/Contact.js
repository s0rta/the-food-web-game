import React from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'

const pageInSpanish = {
  h1: "spanish h1",
  p1: "paragraph1 in spanish",
  p2: "paragraph2 in spanish {link}",
  p3: "paragraph3 in spanish",
  th1: "th1 in spanish",
  th2: "th2 in spanish",
  th3: "th3 in spanish",
  td1: "th1 in spanish",
  email1: "just the word email in spanish",
  website1: "just the word website in spanish",
  td2: "td2 in spanish",
  email2: "just the word email in spanish",
  td3: "td3 in spanish",
  email3: "just the word email in spanish",
  td4: "td4 in spanish",
  website2: "just the word website in spanish",
  td5: "td5 in spanish",
  website3: "just the word website in spanish",
  td6: "td6 in spanish",
  website4: "just the word website in spanish"
}

function Contact(props) {

  const locale = props.match.params.language;
  return (
    <IntlProvider messages={locale === "es" ? pageInSpanish : ""} locale={locale} defaultLocale="en">
      <div className="contact-wrap copy-wrap">
        <div className="container">
          <h1><FormattedMessage id="h1" defaultMessage="Contact" /></h1>
          <p><FormattedMessage id="p1" defaultMessage="If you have any questions, comments or suggestions about this learning module, please contact Aislyn Keyes at aislyn.keyes(at)colorado.edu" /></p>
          <p><FormattedMessage
            id="p2"
            defaultMessage="All code for this game is publicly available on {link}. For game development and coding questions, please contact J.T. Wright at jacob.t.wright(at)pm.me"
            values={{
              link: (<a href="https://github.com/s0rta/the-food-web-game">Github</a>)
            }
            } /></p>
          <p><FormattedMessage id="p3" defaultMessage="You can visit our websites for more information about the people who contributed to this project:" /></p>
          <table>
            <tr>
              <th><FormattedMessage id="th1" defaultMessage="Name" /></th>
              <th><FormattedMessage id="th2" defaultMessage="Title" /></th>
              <th><FormattedMessage id="th3" defaultMessage="Contact Info and/or Website" /></th>
            </tr>
            <tr>
              <td>Aislyn Keyes</td>
              <td><FormattedMessage id="td1" defaultMessage="PhD Candidate of Ecology and Evolutionary Biology at CU Boulder" /></td>
              <td><div><FormattedMessage id="email1" defaultMessage="Email" />: aislyn.keyes(at)colorado.edu</div><div><a href="https://aislynkeyes.weebly.com"><FormattedMessage id="website1" defaultMessage="Website" /></a></div></td>
            </tr>
            <tr>
              <td>JT Wright</td>
              <td><FormattedMessage id="td2" defaultMessage="Lead react/d3 developer " /></td>
              <td><FormattedMessage id="email2" defaultMessage="Email" />: jacob.t.wright(at)pm.me</td>
            </tr>

            <tr>
              <td>Mariana Bastias</td>
              <td><FormattedMessage id="td3" defaultMessage="Undergraduate student at CU Boulder" /></td>
              <td><FormattedMessage id="email3" defaultMessage="Email" />: mariana.bastias(at)colorado.edu</td>
            </tr>
            <tr>
              <td>Laura Dee</td>
              <td><FormattedMessage id="td4" defaultMessage="Assistant Professor of Ecology and Evolutionary Biology at CU Boulder" /></td>
              <td><a href="https://www.lauraedee.com"><FormattedMessage id="website2" defaultMessage="Website" /></a></td>
            </tr>
            <tr>
              <td>Lisa Corwin</td>
              <td><FormattedMessage id="td5" defaultMessage="Assistant Professor of Ecology and Evolutionary Biology at CU Boulder" /></td>
              <td><a href="https://colorado.edu/lab/corwin-reach"><FormattedMessage id="website3" defaultMessage="Website" /></a></td>
            </tr>
            <tr>
              <td>Daniel Larremore</td>
              <td><FormattedMessage id="td6" defaultMessage="Assistant Professor in the Department of Computer Science and the BioFrontiers Institute at CU Boulder" /></td>
              <td><a href="https://larremorelab.github.io"><FormattedMessage id="website4" defaultMessage="Website" /></a></td>
            </tr>
          </table>
        </div>
      </div>
    </IntlProvider >
  )
}

export default Contact;
