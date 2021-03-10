import React from 'react';

import ForceGraph from "./ForceGraph"

class MainGraph extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            trophicDisplay: false,
            clock: 0,
            saves: this.props.levelData.saves
        };
    }

    handleNodeHover = (d) => {
        this
            .props
            .onNodeHover(d);
    }

    handleRightClick = (d, seed) => {
        this
            .props
            .onRightClick(d, seed)
    }

    handleESBiomass = (bioArr, step) => {
        this.props.onUpdateESBiomass(bioArr, step)
    }

    handleLevelEnd = (d) => {
        this.props.onLevelEnd(d)
    }

    toggleTrophic = () => {
        this.setState({trophicDisplay: !this.state.trophicDisplay})
    }

    gameTick = () => {
        this.setState({clock: this.state.clock + 1})
    }

    render()
    {
        return (
            <div className="main-graph-wrap">
                <ForceGraph
                    colors={this.props.colors}
                    name="svgMain"
                    width={700}
                    height={600}
                    nodes={this.props.nodes}
                    seed={0}
                    edges={this.props.edges}
                    levelData={this.props.levelData}
                    trophic={this.state.trophicDisplay}
                    onNodeHover={this.handleNodeHover}
                    onUpdateSaves={() => this.setState({saves: this.state.saves - 1})}
                    onRightClick={this.handleRightClick}
                    onUpdateESBiomass={this.handleESBiomass}
                    onLevelEnd={this.handleLevelEnd}
                    gameClock={this.state.clock}/>
                <input type="button" value="Toggle Trophic" onClick={this.toggleTrophic}/>
                <input type="button" value="Tick" onClick={this.gameTick}/>
                <button onClick={() => window.location.reload()}>Restart Level</button>
                <p>Saves left: {this.state.saves}</p>
            </div>

        )
    }
}

export default MainGraph;