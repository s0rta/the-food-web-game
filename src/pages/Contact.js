import React from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'

const pageInSpanish = {
  h1: "spanish h1",
  p1: "paragraph1 in spanish",
  p2: "paragraph2 in spanish {link}"
}

const locale = "en"

function Contact() {
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
          {/* <p>You can visit our websites for more information about the people who contributed to this project:</p> */}
          {/*   <table> */}
          {/*     <tr> */}
          {/*       <th>Name</th> */}
          {/*       <th>Title</th> */}
          {/*       <th>Contact Info and/or Website</th> */}
          {/*     </tr> */}
          {/*     <tr> */}
          {/*       <td>Aislyn Keyes</td> */}
          {/*       <td>PhD Candidate of Ecology and Evolutionary Biology at CU Boulder</td> */}
          {/*       <td><div>Email: aislyn.keyes(at)colorado.edu</div><div><a href="https://aislynkeyes.weebly.com">Website</a></div></td> */}
          {/*     </tr> */}
          {/*     <tr> */}
          {/*       <td>JT Wright</td> */}
          {/*       <td>Lead react/d3 developer</td> */}
          {/*       <td>Email: jacob.t.wright(at)pm.me</td> */}
          {/*     </tr> */}
          {/*     <tr> */}
          {/*       <td>Laura Dee</td> */}
          {/*       <td>Assistant Professor of Ecology and Evolutionary Biology at CU Boulder</td> */}
          {/*       <td><a href="https://www.lauraedee.com">Website</a></td> */}
          {/*     </tr> */}
          {/*     <tr> */}
          {/*       <td>Lisa Corwin</td> */}
          {/*       <td>Assistant Professor of Ecology and Evolutionary Biology at CU Boulder</td> */}
          {/*       <td><a href="https://colorado.edu/lab/corwin-reach">Website</a></td> */}
          {/*     </tr> */}
          {/*     <tr> */}
          {/*       <td>Daniel Larremore</td> */}
          {/*       <td>Assistant Professor in the Department of Computer Science and the BioFrontiers Institute at CU Boulder</td> */}
          {/*       <td><a href="https://larremorelab.github.io">Website</a></td> */}
          {/*     </tr> */}
          {/*   </table> */}
        </div>
      </div>
    </IntlProvider >
  )
}

export default Contact;
