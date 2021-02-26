import React from 'react';
import ForceGraph from './ForceGraph';
import Plot from './Plot';

class SubGraphs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: 1,
            seed: this.props.seed,
            trophicDisplay: false,
            displayed: false
        };
    }

    componentDidUpdate(oldState) {
        if (oldState.seed !== this.props.seed) {
            this.setState({seed: this.props.seed, trophicDisplay: false, displayed: true})
        }
    }

    handleNodeHover = (d) => {
        this
            .props
            .onNodeHover(d);
    }

    decN = () => {
        if (this.state.n > 1) {
            this.setState({
                n: this.state.n - 1,
                seed: Math.random(),
                trophicDisplay: false
            })
        }
    }

    incN = () => {
        if (this.state.n < 3) {
            this.setState({
                n: this.state.n + 1,
                seed: Math.random(),
                trophicDisplay: false
            })
        }
    }

    toggleTrophic = () => {
        this.setState({
            trophicDisplay: !this.state.trophicDisplay
        })
    }

    render()
    {
        return (
            <div className="sub-graph-wrap">
                sub graphs

                <div className="sub-force-graph">
                    <ForceGraph
                        trophic={this.state.trophicDisplay}
                        onNodeHover={this.handleNodeHover}
                        epiNode={this.props.epiNode}
                        n={this.state.n}
                        width={450}
                        height={350}
                        seed={this.state.seed}
                        colors={this.props.colors}
                        nodes={this.props.nodes}
                        edges={this.props.edges}
                        name="sub-graph"/> {this.state.displayed && <div className="sub-graph-inputs">
                        <p>Levels of Separation: {this.state.n}</p>
                        <input type="button" value="-" onClick={this.decN}/>
                        <input type="button" value="+" onClick={this.incN}/>
                        <input type="button" value="Toggle Trophic" onClick={this.toggleTrophic}/>
                    </div>
}
                <div className="plots">
                    Biomass Plots
                    <Plot name="Wave Attenuation" step={this.props.step} id="wave-attenuation" index={350} failLine={50} display={true} pos={this.props.esBiomass[0]}/>
                    <Plot name="Shoreline Protection" step={this.props.step} id="shoreline-protection" index={450} failLine={50} display={true} pos={this.props.esBiomass[1]}/>
                    <Plot name="Carbon Storage" step={this.props.step} id="carbon-storage" index={550} failLine={50} display={true} pos={this.props.esBiomass[2]}/>
                    <Plot name="Water Filtration" step={this.props.step} id="water-filtration" index={650} failLine={50} display={true} pos={this.props.esBiomass[3]}/>
                    <Plot name="Commercial Fishery" step={this.props.step} id="commercial-fishery" index={750} failLine={50} display={true} pos={this.props.esBiomass[4]}/>
                    <Plot name="Bird Watching" step={this.props.step} id="bird-watching" index={850} failLine={50} display={true} pos={this.props.esBiomass[5]}/>
                    <Plot name="Waterfowl Hunting" step={this.props.step} id="waterfowl-hunting" index={950} failLine={50}  display={true} pos={this.props.esBiomass[6]}/>
                    <Plot name="Recreational Fishery" step={this.props.step} id="recreational-fishery" index={1050} failLine={50} display={true} pos={this.props.esBiomass[7]}/>
                </div>
                </div>

            </div>
        )
    }
}

export default SubGraphs;