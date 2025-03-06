import React from "react";
import Modal from "react-modal";
import { IntlProvider, FormattedMessage } from "react-intl";

const pageInSpanish = {
  h1: "Glosario",
  h21: "Ecología",
  ul1: "<li>Especies: Una manera de clasificar organismos que se reproducen en la naturaleza y producen descendencia fértil.</li> <li>Organismos calcificantes: Organismos que forman conchas o esqueletos hechos de carbonato de calcio.</li> <li>Interacción biótica: Estas interacciones ocurren cuando dos o más organismos (pueden ser de la misma o de distintas especies) se afectan mutuamente (ej., un organismo consume a otro).</li> <li>Flujo de energía hacia dentro: La energía fluye en redes alimenticias de un organismo a otro. Este flujo de energía muestra de dónde un organismo recibe su energía (qué es lo que come).</li> <li>Flujo de energía hacia afuera: La energía fluye en redes alimenticias de un organismo a otro. Este flujo de energía muestra hacia donde va la energía de un organismo (qué lo come).</li> <li>Red alimenticia: Una visualización de quién-come-quién en un sistema ecológico.</li> <li>Nivel trófico: La posición que una especie ocupa en la red alimenticia y es clasificada por el número de pasos de alimentación que una especie está de los productores primarios.</li> ",
  h22: "Servicios Ecosistemáticos",
  ul2: `<li>Servicios ecosistemáticos: Los beneficios que la naturaleza provee a las personas.</li> 
<li>Observación de aves: Una actividad recreacional en donde las personas observan las aves.</li>
<li>Pesca: La pesca es la cosecha de especies acuáticas, incluyendo peces, camarones, y otros mariscos. La pesca puede tomar parte en aguas dulces o saladas.</li>
<li>Atenuación de olas: el amortiguamiento o la desaceleración de olas.</li>
<li>Estabilización de la costa: La estabilización de la costa ocurre donde el agua se encuentra con la tierra y controla la erosión (la destrucción/eliminación del suelo y otros minerales.</li>
<li>Almacenamiento de carbono: El proceso de capturar carbono y almacenarlo en biomasa (masa biológica) antes de que el dióxido de carbono sea liberado a la atmósfera.</li>
<li>Caza de aves acuáticas: Una actividad recreativa en la que las personas cazan patos, gansos, y otras aves acuáticas.</li>
<li>Filtración del agua: El proceso de filtrar partículas del agua. Estas partículas pueden variar desde químicos y contaminantes dañinos hasta metales.</li>`,
  h23: "Perturbación",
  ul3: `<li>Perturbación: Usualmente un cambio abrupto en las condiciones ambientales que causa cambios en la estructura y/o función del ecosistema.</li> 
<li>Impactos directos: Las perturbaciones pueden impactar a especies directamente, donde los cambios en las condiciones ambientales provocan un cambio para la especie. Por ejemplo, la disminución del pH del océano impacta directamente a las especies que forman conchas, ya que el aumento de la acidez puede disolver estructuras calcificadas.</li>
<li>Impactos indirectos: Los impactos indirectos ocurren cuando un cambio en las condiciones ambientales impacta a una especie a través de otra especie. Por ejemplo, cuando el arenque americano (una especie de pez) es sobreexplotado, las poblaciones de ballenas jorobadas disminuyen.</li>
<li>Acidificación del océano: la reducción del pH del océano que resulta de la absorción de dióxido de carbono en el océano. Esta perturbación tiene un gran impacto en los organismos calcificantes.</li>
<li>Destrucción de hábitat: la destrucción o alteración ocurre cuando se cambia un hábitat, resultando a menudo en un área que no puede sustentar su vida biológica original.</li>
<li>Contaminación: la contaminación en los ambientes costeros puede resultar tanto de actividades terrestres como marinos. Químicos, nutrientes, y basura, entre otros, pueden escurrirse hacia los ecosistemas costeros. Barcos y otras embarcaciones pueden verter aguas contaminadas, combustible, escombros, y desperdicios.</li>
<li>Eutrofización: cantidades excesivas de nutrientes disueltos en un cuerpo de agua, a menudo casuadas por la escorrentía de la tierra. Esto puede conducir a un crecimiento denso de algas y otras plants.</li>
<li>Salinidad: la cantidad de sal disuelta en un cuerpo de agua.</li>`,
};

export default class GlossaryModal extends React.Component {
  closeModal = () => {
    this.props.close();
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} className="glossaryModal ">
        <IntlProvider
          messages={this.props.language === "es" ? pageInSpanish : ""}
          locale={this.props.language}
          defaultLocale="en"
        >
          <div className="">
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
                <FormattedMessage
                  id="h22"
                  defaultMessage="Ecosystem Services"
                />
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
            <button
              className="btn--primary modal-button"
              onClick={this.closeModal}
            >
              Close
            </button>
          </div>
        </IntlProvider>
      </Modal>
    );
  }
}
