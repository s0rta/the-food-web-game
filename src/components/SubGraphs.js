import React from 'react';
import ForceGraph from './ForceGraph';
import Plot from './Plot';

import ServiceCount from './ServiceCount';

class SubGraphs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: 1,
            seed: this.props.seed,
            trophicDisplay: false,
            displayed: false,
            flowIn: false,
            flowOut: true
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

    swapFlowIn = () => {
        this.setState({
            flowIn: !this.state.flowIn,
            seed: Math.random(),
            trophicDisplay: false
        })
    }

    swapFlowOut = () => {
        this.setState({
            flowOut: !this.state.flowOut,
            seed: Math.random(),
            trophicDisplay: false
        })
    }


    toggleTrophic = () => {
        this.setState({
            trophicDisplay: !this.state.trophicDisplay
        })
    }

    handleLevelEnd = (d) => {
        this.props.onLevelEnd(d)
    }

    render()
    {
        return (
            <div className="sub-graph-wrap">
                {this.props.step === 0 && <div className="sub-force-graph">
                    <ForceGraph
                        trophic={this.state.trophicDisplay}
                        onNodeHover={this.handleNodeHover}
                        epiNode={this.props.epiNode}
                        n={this.state.n}
                        flowIn={this.state.flowIn}
                        flowOut={this.state.flowOut}
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
                        <input type="button" value="Energy In" onClick={this.swapFlowIn}/>
                        <input type="button" value="Energy Out" onClick={this.swapFlowOut}/>
                        <input type="button" value="Toggle Trophic" onClick={this.toggleTrophic}/>
                    </div>
    }
    </div>}
    <br/>
                <div className="plots">
                    <ServiceCount onLevelEnd={this.handleLevelEnd} biomass={this.props.esBiomass} display={this.props.levelData.shownGraphs.includes("num-services")} pos={this.props.esBiomass[0]}/>
                    <Plot yAxis="Percent of species remaining in food web" name="Species Remaining" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="species-remaining" index={1} failLine={70} display={this.props.levelData.shownGraphs.includes("species-remaining")} pos={this.props.speciesRemaining}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Wave Attenuation" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="wave-attenuation" index={350} failLine={50} display={this.props.levelData.shownGraphs.includes("wave-attenuation")} pos={this.props.esBiomass[0]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Shoreline Protection" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="shoreline-protection" index={450} failLine={50} display={this.props.levelData.shownGraphs.includes("shoreline-protection")} pos={this.props.esBiomass[1]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Carbon Storage" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="carbon-storage" index={550} failLine={50} display={this.props.levelData.shownGraphs.includes("carbon-storage")} pos={this.props.esBiomass[2]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Water Filtration" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="water-filtration" index={650} failLine={50} display={this.props.levelData.shownGraphs.includes("water-filtration")} pos={this.props.esBiomass[3]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Commercial Fishery" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="commercial-fishery" index={750} failLine={50} display={this.props.levelData.shownGraphs.includes("commercial-fishery")} pos={this.props.esBiomass[4]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Bird Watching" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="bird-watching" index={850} failLine={50} display={this.props.levelData.shownGraphs.includes("bird-watching")} pos={this.props.esBiomass[5]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Waterfowl Hunting" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="waterfowl-hunting" index={950} failLine={50}  display={this.props.levelData.shownGraphs.includes("waterfowl-hunting")} pos={this.props.esBiomass[6]}/>
                    <Plot yAxis="Amount of ecosystem service left" name="Recreational Fishery" onLevelEnd={this.handleLevelEnd} step={this.props.step} id="recreational-fishery" index={1050} failLine={50} display={this.props.levelData.shownGraphs.includes("recreational-fishery")} pos={this.props.esBiomass[7]}/>
                </div>
                </div>


        )
    }
}

export default SubGraphs;