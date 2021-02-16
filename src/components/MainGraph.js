import React from 'react';

import ForceGraph from "./ForceGraph"

class MainGraph extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            trophicDisplay: false
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

    toggleTrophic = () => {
        this.setState({trophicDisplay: !this.state.trophicDisplay})
    }

    render()
    {
        return (
            <div className="main-graph-wrap">
                main-graph
                <ForceGraph
                    colors={this.props.colors}
                    name="svgMain"
                    width={700}
                    height={600}
                    nodes={this.props.nodes}
                    seed={0}
                    edges={this.props.edges}
                    trophic={this.state.trophicDisplay}
                    onNodeHover={this.handleNodeHover}
                    onRightClick={this.handleRightClick}/>
                <input type="button" value="Toggle Trophic" onClick={this.toggleTrophic}/>
            </div>

        )
    }
}

export default MainGraph;