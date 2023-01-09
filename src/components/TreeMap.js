import React, { useState, useEffect } from "react";

import "./TreeMap.css";

import Treemap from "../scripts/json-to-treemap.js";

function TreeMap(props) {
  const [treeDataDirect, setTreeDataDirect] = useState([
    { name: "Mammal", size: 0, color: "db6d00" },
    { name: "Microscopic Organism", size: 0, color: "#000" },
    { name: "Crustacean", size: 0, color: "#009292" },
    { name: "Plant", size: 0, color: "#24ff24" },
    { name: "Bird", size: 0, color: "#920000" },
    { name: "Insect", size: 0, color: "#b6dbff" },
    { name: "Insect, Annelid & Arachnid", size: 0, color: "#b6dbff" },
    { name: "Fish", size: 0, color: "#006ddb" },
    { name: "Plankton", size: 0, color: "#ffff6d" },
    { name: "Mollusc", size: 0, color: "#004949" },
    { name: "Snail", size: 0, color: "#004949" },
    { name: "Sea Urchin", size: 0, color: "#e1be6a" }
  ]);
  const [treeDataIndirect, setTreeDataIndirect] = useState([
    { name: "Mammal", size: 0, color: "db6d00" },
    { name: "Microscopic Organism", size: 0, color: "#000" },
    { name: "Crustacean", size: 0, color: "#009292" },
    { name: "Plant", size: 0, color: "#24ff24" },
    { name: "Bird", size: 0, color: "#920000" },
    { name: "Insect", size: 0, color: "#b6dbff" },
    { name: "Insect, Annelid & Arachnid", size: 0, color: "#b6dbff" },
    { name: "Fish", size: 0, color: "#006ddb" },
    { name: "Plankton", size: 0, color: "#ffff6d" },
    { name: "Mollusc", size: 0, color: "#004949" },
    { name: "Snail", size: 0, color: "#004949" },
    { name: "Sea Urchin", size: 0, color: "#e1be6a" }
  ]);
  const [isOver, setIsOver] = useState(false);

  const incrementTreeData = (index, value, direct) => {
    let newTreeData = direct ? treeDataDirect : treeDataIndirect;
    newTreeData[index].size += Math.max(value, 0);
    if (!direct) {
      setTreeDataIndirect(newTreeData);
    } else {
      setTreeDataDirect(newTreeData);
    }
    console.log(treeDataDirect, treeDataIndirect)
  };

  useEffect(() => {
    console.log(props);
    if (props.levelOver && !isOver) {
      setIsOver(true);
      for (const node of props.nodeList) {
        const nodeType = !node.living && node.organismType;
        const groupIndex = treeDataIndirect.findIndex(
          (n) => n.name === nodeType
        );
        if (groupIndex >= 0) {
          incrementTreeData(
            groupIndex,
            node.biomass,
            node.initial ? true : false
          );
        }
      }

      props.level > 2 &&
        document
          .getElementById("direct-wrapper")
          .appendChild(Treemap(treeDataDirect));
      document
        .getElementById("indirect-wrapper")
        .appendChild(Treemap(treeDataIndirect));
    }
  });

  return (
    <div id="treemap-wrapper">
      {props.level > 2 && (
        <div id="direct-wrapper">
          <h2 className="level-header" style={{ textAlign: "left" }}>
            Breakdown of Species Directly Impacted
          </h2>
          <div id="my_dataviz1"></div>
        </div>
      )}
      <div id="indirect-wrapper" style={{ textAlign: "left" }}>
        <h2 className="level-header">Breakdown of Species Indirectly Lost</h2>
        <div id="my_dataviz2"></div>
      </div>
    </div>
  );
}

export default TreeMap;
