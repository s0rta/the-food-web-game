import React from 'react';

import {Link} from 'react-router-dom';

import "./SideBar.css"

class SideBar extends React.Component {
    isES = (name) => {
        const es = [
            "",
            "wave attenuation",
            "shoreline protection",
            "shoreline stabilization",
            "carbon sequestration",
            "water filtration",
            "commfishery",
            "birdwatching",
            "waterfowl hunting",
            "recfishery",
            "recreational fishery",
            "commercial fishery",
            "carbon storage"
        ]
        let transformed = name
            .toLowerCase()
            .split("-")
            .join(" ")
        return es.includes(transformed);
    }

    handleModal = () => {
        this.props.onToggleModal()
    }

    render()
    {
        return (
            <div className="sidebar-wrap">
                
                <h1>Level <span id="level">{this.props.level}</span></h1>
                <button onClick={this.handleModal}>Show Intro/Objective</button>
                <Link to="/level-select"><button>Level Select</button></Link>

      <br/>
      {this.props.data ? <div><img className="photo" src={`/img/Images/${this.props.data.imgFile}`} alt=""/>
      <h2 className="name">Name: <span className="name-filler">{this.props.data.nodeName}</span></h2>
      <p className="biomass">Biomass: <span className="biomass-filler">{this.isES(this.props.data.nodeName) ? "N/A" : this.props.data.biomass}</span></p>
      <p className="type">Type: <span className="type-filler">{this.props.data.organismType}</span></p>
      <p className="trophic">Trophic Level: <span className="trophic-filler">{this.props.data.trophicLevel}</span></p>
      <p className="desc">{this.props.data.desc}</p></div> : ""}
      
            </div>
        )
    }
}

export default SideBar;