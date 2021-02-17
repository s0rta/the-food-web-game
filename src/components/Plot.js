import React from 'react';
import * as d3 from 'd3';

import "./SideBar.css"

class Plot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            data: [],
            startPos: this.props.pos 
        };
    }

    drawPlot() {
        d3.select(`#${this.props.id} *`).remove()

        let plotSVG = d3
            .select(`#${this.props.id}`)
            .attr("width", 460)
            .attr("height", 410)
            .append("g")
            .attr("transform",
                "translate(60,30)")

        let plotX = d3
            .scaleLinear()
            .domain([0, this.state.step])
            .range([0, 390]);

        let plotY = d3
            .scaleLinear()
            .domain([0, 100])
            .range([360, 0])

        plotSVG
            .append("g")
            .attr("transform", "translate(0," + 360 + ")")
            .call(d3.axisBottom(plotX));

        plotSVG
            .append("g")
            .call(d3.axisLeft(plotY));

        plotSVG
            .append("path")
            .datum(this.state.data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line().x(d => plotX(d.x)).y(d => plotY(d.y)))
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.pos === -1 && this.props.pos !== -1 ) {
            this.setState({
                startPos: this.props.pos,
                data: [{x:0, y: 100}]
            }, () => {
                this.drawPlot()
                this.setState({step: 1})
            })
        } else if(this.props.pos !== prevProps.pos) {
            let data = [...this.state.data];
            data.push({
                x: this.state.step,
                y: (this.props.pos / this.state.startPos) * 100
            })
            this.setState({data: data, step: this.state.step + 1}, () => {
                this.drawPlot()
            })
        }
    }

    render()
    {
        return (
            <div className="plot">
                <div>{this.props.name}</div>
                <svg id={this.props.id}/>
            </div>

        )
    }
}

export default Plot;