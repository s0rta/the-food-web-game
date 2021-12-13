import { thresholdScott } from 'd3-array';
import React from 'react';

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
    if (this.props.biomass !== prevProps.biomass && this.props.biomass[0] !== -1 && !this.state.dataSet) {
      this.setState({ data: this.props.biomass, dataSet: true })
    }
    else if (this.props.biomass !== prevProps.biomass && this.props.display) {
      let newWorkingES = 0;
      this.props.biomass.forEach((n, i) => {
        let ratio = n / this.state.data[i];
        if (ratio >= 0.2) {
          newWorkingES++;
        }
      })
      this.setState({ workingES: newWorkingES })
      if (newWorkingES < 8) {
        this.props.onLevelLost(true)
      }
    }
  }

  render() {
    return (
      <>
        {this.props.display &&
          <div className="service-count-wrap">
            {this.state.workingES} out of 8 services in tact
          </div>
        }
      </>
    )
  }
}

export default ServiceCount;
