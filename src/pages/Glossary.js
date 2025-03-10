import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const pageInSpanish = {
  h1: "Glosario",
  h21: "Ecología",
  ul1: "<li><b>Especies:</b> Una manera de clasificar organismos que se reproducen en la naturaleza y producen descendencia fértil.</li>",
  h22: "Servicios Ecosistemáticos",
  ul2: "<li><b>Servicio Ecosistemático:</b> Los beneficios que la naturaleza proporciona a las personas</li>",
  h23: "Perturbación",
  ul3: "<li><b>Perturbación:</b> Usualmente un cambio abrupto en las condiciones ambientales que causa cambios en la estructura y/o función del ecosistema.</li>",
};

function Glossary(props) {
  return (
    <IntlProvider
      messages={props.match.params.language === "es" ? pageInSpanish : ""}
      locale={props.match.params.language}
      defaultLocale="en"
    >
      <div className="copy-wrap glossary-wrap">
        <div className="container">
          <h1>
            <FormattedMessage id="h1" defaultMessage="Glossary" />
          </h1>
          <h2>
            <FormattedMessage id="h21" defaultMessage="Ecology" />
          </h2>
          <ul className="glossary-list">
            <FormattedMessage
              id="ul1"
              defaultMessage="
            <li><b>Species:</b> A way of classifying organisms that can reproduce in nature and produce fertile offspring.
            </li>
            <li><b>Calcifying organisms:</b> Organisms that form shells or skeletons made out of calcium carbonate.
            </li>
            <li><b>Biotic interaction:</b> These interactions occur when two or more organisms (can be the same of different species) have an effect on each other (e.g., one organism eats another).
            </li>
            <li> <b>Energy flow-in:</b> Energy flows through food webs from one organism to another. Energy flow-in shows where an organism gets its energy from (what it’s eating).
            </li>
            <li><b>Energy flow-out:</b> Energy flows through food webs from one organism to another. Energy flow-out shows where an organism sends its energy to (what's eating it).
            </li>
            <li><b>Food Web:</b> A visualization of who-eats-who in an ecological system
            </li>
            <li><b>Trophic level:</b> the position that a species occupies in a food web and is classified by the number of feeding steps a species is from primary producers.
            </li>"
              values={{
                li: (...msg) => <li>{msg}</li>,
                b: (...msg) => <b>{msg}</b>,
              }}
            />
          </ul>

          <h2>
            <FormattedMessage id="h22" defaultMessage="Ecosystem Services" />
          </h2>
          <ul className="glossary-list">
            <FormattedMessage
              id="ul2"
              defaultMessage="<li><b>Ecosystem service:</b> The benefits that nature provides people</li>
            <li><b>Birdwatching:</b> A recreational activity where people observe birds</li>
            <li><b>Fishery:</b> Fisheries are the harvest of species that live in water, including fish, shrimp and other seafood. Fisheries can take place in freshwater or saltwater.</li>
            <li><b>Wave attenuation:</b> The buffering, or slowing of waves</li>
            <li><b>Shoreline stabilization:</b> Shoreline stabilization occurs where water meets land and controls erosion (the destruction/removal of soil and other minerals).</li>
            <li><b>Carbon storage:</b> The process of capturing carbon and storing it in biomass (biological mass) before carbon dioxide is released into the atmosphere.</li>
            <li><b>Waterfowl hunting:</b> A recreational activity where people hunt ducks, geese, and other water birds.</li>
            <li><b>Water filtration:</b> The process of filtering particles out of water. These particles can range from harmful chemicals and pollutants to metals.</li>"
              values={{
                li: (...msg) => <li>{msg}</li>,
                b: (...msg) => <b>{msg}</b>,
              }}
            />
          </ul>

          <h2>
            <FormattedMessage id="h23" defaultMessage="Disturbance" />
          </h2>
          <ul className="glossary-list">
            <FormattedMessage
              id="ul3"
              defaultMessage="
            <li><b>Disturbance:</b> Usually an abrupt change in environmental conditions that causes changes in ecosystem structure and/or function.</li>
            <li><b>Direct impacts:</b> Disturbances can directly impact species, where the changes in environmental conditions cause a shift for a species. For example, decreasing ocean pH directly impacts species that form shells, as the increased acidity can dissolve the calcified structures.</li>
            <li><b>Indirect impacts:</b> Indirect impacts occur when a change in environmental conditions impacts a species through another species. For example, when the menhaden (a fish species) is overharvested, humpback whale populations decrease.</li>
            <li><b>Ocean acidification:</b> The decrease in the ocean’s pH that results from the ocean absorbing carbon dioxide. This disturbance has a large impact on calcifying organisms.</li>
            <li><b>Habitat destruction:</b> Habitat destruction or alteration occurs when a habitat is changed, often resulting in an area that cannot support its original biological life.</li>
            <li><b>Pollution:</b> Pollution in coastal environments can result from both land-based and ocean-based activities. Chemicals, nutrients and garbage, among other things, can run off into coastal ecosystems. Boats and other vessels can discharge contaminated water, fuel, debris and waste.</li>
            <li><b>Eutrophication:</b> Excessive amounts of nutrients dissolved in a body of water, often caused by run-off from the land. This can lead to dense growth of algae and other plants.</li>
            <li><b>Salinity:</b> The amount of salt dissolved in a body of water.</li>
          "
              values={{
                li: (...msg) => <li>{msg}</li>,
                b: (...msg) => <b>{msg}</b>,
              }}
            />
          </ul>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Glossary;
