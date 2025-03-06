import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const pageInSpanish = {
  h1: "Página de Contacto",
  p1: "Si tiene alguna pregunta, comentario o sugerencia sobre este módulo de aprendizaje, por favor comuníquese a Aislyn Keyes a aislyn.keyes@colorado.edu",
  p2: "Todo el código para este juego están disponibles al público en Github. Para preguntas sobre el desarrollo y código del juego, por favor comuníquese J.T. Wright a jacob.t.wright(at)pm.me {link}",
  p3: "Para más información sobre los contruibuyentes de este proyecto, puede visitar nuestras páginas web:",
  th1: "Nombre",
  th2: "Título",
  th3: "Información de contacto y/o página web",
  td1: "Candidata a doctor en Ecología y Biología Evolucionaria en CU Boulder",
  email1: "Correo electrónico",
  website1: "Página web",
  td2: "Desarrollador de React/D3",
  email2: "Correo electrónico",
  td3: "Estudiante de pregrado en CU Boulder",
  email3: "Correo electrónico",
  td4: "Profesora Asistente de Ecología y Biología Evolucionaria en CU Boulder",
  website2: "Página web",
  td5: "Profesora Asistente de Ecología y Biología Evolucionaria en CU Boulder",
  website3: "Página web",
  td6: "Profesor Asistente en el Departamento de Computación y el Instituto BioFrontiers en CU Boulder",
  website4: "Página web",
};

function Contact(props) {
  const locale = props.match.params.language;
  return (
    <IntlProvider
      messages={locale === "es" ? pageInSpanish : ""}
      locale={locale}
      defaultLocale="en"
    >
      <div className="contact-wrap copy-wrap">
        <div className="container">
          <h1>
            <FormattedMessage id="h1" defaultMessage="Contact" />
          </h1>
          <p>
            <FormattedMessage
              id="p1"
              defaultMessage="If you have any questions, comments or suggestions about this learning module, please contact Aislyn Keyes at aislyn.keyes(at)colorado.edu"
            />
          </p>
          <p>
            <FormattedMessage
              id="p2"
              defaultMessage="All code for this game is publicly available on {link}. For game development and coding questions, please contact J.T. Wright at jacob.t.wright(at)pm.me"
              values={{
                link: (
                  <a href="https://github.com/s0rta/the-food-web-game">
                    Github
                  </a>
                ),
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="p3"
              defaultMessage="You can visit our websites for more information about the people who contributed to this project:"
            />
          </p>
          <table>
            <tr>
              <th>
                <FormattedMessage id="th1" defaultMessage="Name" />
              </th>
              <th>
                <FormattedMessage id="th2" defaultMessage="Title" />
              </th>
              <th>
                <FormattedMessage
                  id="th3"
                  defaultMessage="Contact Info and/or Website"
                />
              </th>
            </tr>
            <tr>
              <td>Aislyn Keyes</td>
              <td>
                <FormattedMessage
                  id="td1"
                  defaultMessage="PhD Candidate of Ecology and Evolutionary Biology at CU Boulder"
                />
              </td>
              <td>
                <div>
                  <FormattedMessage id="email1" defaultMessage="Email" />:
                  aislyn.keyes(at)colorado.edu
                </div>
                <div>
                  <a href="https://aislynkeyes.weebly.com">
                    <FormattedMessage id="website1" defaultMessage="Website" />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>JT Wright</td>
              <td>
                <FormattedMessage
                  id="td2"
                  defaultMessage="Lead react/d3 developer "
                />
              </td>
              <td>
                <FormattedMessage id="email2" defaultMessage="Email" />:
                jacob.t.wright(at)pm.me
              </td>
            </tr>

            <tr>
              <td>Mariana Bastias</td>
              <td>
                <FormattedMessage
                  id="td3"
                  defaultMessage="Undergraduate student at CU Boulder"
                />
              </td>
              <td>
                <FormattedMessage id="email3" defaultMessage="Email" />:
                mariana.bastias(at)colorado.edu
              </td>
            </tr>
            <tr>
              <td>Laura Dee</td>
              <td>
                <FormattedMessage
                  id="td4"
                  defaultMessage="Assistant Professor of Ecology and Evolutionary Biology at CU Boulder"
                />
              </td>
              <td>
                <a href="https://www.lauraedee.com">
                  <FormattedMessage id="website2" defaultMessage="Website" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Lisa Corwin</td>
              <td>
                <FormattedMessage
                  id="td5"
                  defaultMessage="Assistant Professor of Ecology and Evolutionary Biology at CU Boulder"
                />
              </td>
              <td>
                <a href="https://colorado.edu/lab/corwin-reach">
                  <FormattedMessage id="website3" defaultMessage="Website" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Daniel Larremore</td>
              <td>
                <FormattedMessage
                  id="td6"
                  defaultMessage="Assistant Professor in the Department of Computer Science and the BioFrontiers Institute at CU Boulder"
                />
              </td>
              <td>
                <a href="https://larremorelab.github.io">
                  <FormattedMessage id="website4" defaultMessage="Website" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Contact;
