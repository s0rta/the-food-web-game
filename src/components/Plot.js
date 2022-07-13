import React from "react";
import * as d3 from "d3";

import "./SideBar.css";

class Plot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      failLine: [
        { x: 0, y: this.props.failLine },
        { x: 1, y: this.props.failLine },
      ],
      startPos: this.props.pos,
    };
  }

  drawPlot() {
    const width = 350;
    const height = 350;

    d3.select(`#${this.props.id} *`).remove();

    let plotSVG = d3
      .select(`#${this.props.id}`)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(60,30)");

    let plotX = d3
      .scaleLinear()
      .domain([0, this.props.step + 1])
      .range([0, width - 110]);

    let plotY = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - 140, 0]);

    plotSVG
      .append("g")
      .attr("transform", "translate(0," + (height - 140) + ")")
      .call(d3.axisBottom(plotX).ticks(this.props.step));

    plotSVG
      .append("text")
      .attr(
        "transform",
        "translate(" + (width - 110) / 2 + " ," + (height - 100) + ")"
      )
      .style("text-anchor", "middle")
      .text(this.props.locale === "es" ? "" : "Number of species Removed");

    plotSVG
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -50)
      .attr("x", 0 - (height - 140) / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text(this.props.yAxis);

    plotSVG.append("g").call(d3.axisLeft(plotY));

    plotSVG
      .append("path")
      .datum(this.state.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => plotX(d.x))
          .y((d) => plotY(d.y))
      );

    plotSVG
      .append("path")
      .datum(this.state.failLine)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => plotX(d.x))
          .y((d) => plotY(d.y))
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pos === -1 && this.props.pos !== -1 && this.props.display) {
      this.setState(
        {
          startPos: this.props.pos,
          data: [{ x: 0, y: 100 }],
        },
        () => {
          this.drawPlot();
        }
      );
    } else if (this.props.step !== prevProps.step && this.props.display) {
      let data = [...this.state.data];
      data.push({
        x: this.props.step,
        y: (this.props.pos / this.state.startPos) * 100,
      });
      this.setState(
        {
          data: data,
          failLine: [
            ...this.state.failLine,
            { x: this.props.step + 1, y: this.props.failLine },
          ],
        },
        () => {
          this.drawPlot();
        }
      );
      if (
        Math.abs((this.props.pos / this.state.startPos) * 100) <
        this.props.failLine
      ) {
        this.props.onLevelLost(true);
      }
    }
  }

  render() {
    return (
      <>
        {this.props.display && (
          <div className="plot">
            <div>{this.props.name}</div>
            <svg id={this.props.id} />
          </div>
        )}
      </>
    );
  }
}

export default Plot;
