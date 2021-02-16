import { randomIrwinHall } from 'd3';
import React from 'react';
import ForceGraph from './ForceGraph';

class SubGraphs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: 1,
            seed: this.props.seed,
            trophicDisplay: false
        };
    }

    componentDidUpdate(oldState) {
        if(oldState.seed !== this.props.seed) {
            this.setState({seed: this.props.seed, trophicDisplay: false})
        }
    }


    handleNodeHover = (d) => {
        this.props.onNodeHover(d);
    }

    decN = () => {
        if (this.state.n > 1) {
            this.setState({n: this.state.n - 1, seed: Math.random(), trophicDisplay: false})
        }
    }

    incN = () => {
        if (this.state.n < 3) {
            this.setState({n: this.state.n + 1, seed: Math.random(), trophicDisplay: false})
        }
    }

    toggleTrophic = () => {
        this.setState({trophicDisplay: !this.state.trophicDisplay})
    }

    render()
    {
        return (
            <div className="sub-graph-wrap">
                sub graphs
                <div className="sub-force-graph">
                    <ForceGraph trophic={this.state.trophicDisplay} onNodeHover={this.handleNodeHover} epiNode={this.props.epiNode} n={this.state.n} width={450} height={350} seed={this.state.seed} colors={this.props.colors} nodes={this.props.nodes} edges={this.props.edges} name="sub-graph"/>
                    <p>Levels of Separation: {this.state.n}</p>
                    <input type="button" value="-" onClick={this.decN}/>
                    <input type="button" value="+" onClick={this.incN}/>
                    <input type="button" value="Toggle Trophic" onClick={this.toggleTrophic}/>
                </div>
            </div>
        )
    }
}

export default SubGraphs;