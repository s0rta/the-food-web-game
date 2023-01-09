import { thresholdScott } from "d3-array";
import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import Plot from "./Plot";

const componentInSpanish = {
  sit: "spanish services in tact",
};

class ServiceCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.biomass,
      workingES: 8,
      dataSet: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.biomass !== prevProps.biomass &&
      this.props.biomass[0] !== -1 &&
      !this.state.dataSet
    ) {
      this.setState({ data: this.props.biomass, dataSet: true });
    } else if (this.props.biomass !== prevProps.biomass && this.props.display) {
      let newWorkingES = 0;
      this.props.biomass.forEach((n, i) => {
        let ratio = n / this.state.data[i];
        if (ratio >= 0.2) {
          newWorkingES++;
        }
      });
      this.setState({ workingES: newWorkingES });
      if (newWorkingES < 8) {
        this.props.onLevelLost(true);
      }
    }
  }

  render() {
    return (
      <IntlProvider
        messages={this.props.locale === "es" ? componentInSpanish : ""}
        defaultLocale="en"
        locale={this.props.locale}
      >
        {this.props.display && (
          <div className="service-count-wrap">
            <FormattedMessage id="sitStart" defaultMessage="At the end of the simulation" />
            {" "}{this.state.workingES}{" "}
            <FormattedMessage
              id="sit"
              defaultMessage="out of 8 ecosystem services were in tact"
            />
            <Plot
              locale={this.props.locale}
              yAxis={
                this.props.locale === "es" ? "" : "Count of services in tact"
              }
              name={""}
              onLevelLost={this.props.onLevelLost}
              step={this.props.step}
              id="services-remaining"
              index={0}
              failLine={70}
              display
              pos={this.state.workingES}
              overRidePercent
            />
          </div>
        )}
      </IntlProvider>
    );
  }
}

export default ServiceCount;
