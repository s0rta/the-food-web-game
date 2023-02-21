import React from "react";
import * as enDemoLists from '../data/list-demo'
import MainGraph from './MainGraph'
import SideBar from './SideBar'
import {Redirect } from 'react-router-dom'

class Demo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			locale: 'en',
			levelOver: false,
			hoveredNode: null,
			nodes: [enDemoLists.nodeList1, enDemoLists.nodeList2, enDemoLists.nodeList3, enDemoLists.nodeList4],
			edges: [enDemoLists.edgeList1, enDemoLists.edgeList2, enDemoLists.edgeList3, enDemoLists.edgeList4],
			demoPos: 0,
		}

	}


	handleNodeHover = (d, lite = false) => {
		if (lite) {
			this.setState({ liteLabel: d.nodeName });
		}
		this.setState(() => {
			return { hoveredNode: d };
		});
	};

	handleContinueDemo = () => {

			this.setState({demoPos: this.state.demoPos + 1})
			 	}

	render() {
		return (
			<div className="demo-wrap">
				{this.state.demoPos > 3 ? 
			<Redirect push to={`/game/1/${this.props.match.params.difficulty}/${this.props.match.params.language}`} /> 
			:
			<> 
				<SideBar
					onToggleModal={(modal) => this.swapModal(modal)}
					locale={this.state.locale}
					onToggleTrophic={this.toggleTrophic}
					onSimulateDisturbance={this.simulateDisturbance}
					trophicDisplay={this.state.trophicDisplay}
					level={this.state.level}
					data={this.state.hoveredNode}
					difficulty={this.props.match.params.difficulty}
					demoMode={true}
					continueDemo={this.handleContinueDemo}
				/>
				<MainGraph
					levelData={enDemoLists.levels[this.state.demoPos]}
					locale={this.state.locale}
					levelOver={this.state.levelOver}
					trophicDisplay={true}
					won={true}
					colors={enDemoLists.colors}
					nodes={this.state.nodes[this.state.demoPos]}
					edges={this.state.edges[this.state.demoPos]}
					onUpdateESBiomass={() => { }}
					onUpdateSpeciesRemaining={() => { }}
					onNodeHover={this.handleNodeHover}
					historyStep={this.state.demoPos}
				/>
			</>
		}
			
			</div>
		)
	}
}

export default Demo
