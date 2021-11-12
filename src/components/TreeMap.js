import React, { useState, useEffect } from "react";

import "./TreeMap.css";

import Treemap from "../scripts/json-to-treemap.js";

function TreeMap(props) {
  const [treeDataDirect, setTreeDataDirect] = useState([
    { name: "No species were directly lost", size: 1 },
    { name: "Mammal", size: 0 },
    { name: "Microscopic Organism", size: 0 },
    { name: "Crustacean", size: 0 },
    { name: "Plant", size: 0 },
    { name: "Bird", size: 0 },
    { name: "Insect", size: 0 },
    { name: "Insect, Annelid & Arachnid", size: 0 },
    { name: "Fish", size: 0 },
    { name: "Plankton", size: 0 },
    { name: "Mollusc", size: 0 },
  ]);
  const [treeDataIndirect, setTreeDataIndirect] = useState([
    { name: "No species were indirectly lost", size: 1 },
    { name: "Mammal", size: 0 },
    { name: "Microscopic Organism", size: 0 },
    { name: "Crustacean", size: 0 },
    { name: "Plant", size: 0 },
    { name: "Bird", size: 0 },
    { name: "Insect", size: 0 },
    { name: "Insect, Annelid & Arachnid", size: 0 },
    { name: "Fish", size: 0 },
    { name: "Plankton", size: 0 },
    { name: "Mollusc", size: 0 },
  ]);

  const incrementTreeData = (index, value, direct) => {
    let newTreeData = direct ? treeDataDirect : treeDataIndirect;
    newTreeData[index].size += Math.max(value, 0);
    newTreeData[0].size = 0;
    direct ? setTreeDataDirect(newTreeData) : setTreeDataIndirect(newTreeData);
  };

  useEffect(() => {
    if (props.levelOver) {
      console.log(props.nodeList);
      for (const node of props.nodeList) {
        const nodeType = !node.living && node.organismType;
        const groupIndex = treeDataDirect.findIndex((n) => n.name === nodeType);
        if (groupIndex >= 0) {
          console.log(node);
          incrementTreeData(
            groupIndex,
            node.biomass,
            node.initial ? true : false
          );
        }
      }
      console.log(treeDataIndirect);
      document.getElementById("direct-wrapper").appendChild(
        Treemap(treeDataDirect, {
          path: (d) => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
          value: (d) => d?.size, // size of each node (file); null for internal nodes (folders)
          group: (d) => d.name.split(".")[0], // e.g., "animate" in "flare.animate.Easing"; for color
          label: (d, n) =>
            [
              ...d.name
                .split(".")
                .pop()
                .split(/(?=[A-Z][a-z])/g),
              n.value.toLocaleString("en"),
            ].join("\n"),
          title: (d, n) => `${d.name}\n${n.value.toLocaleString("en")}`, // text to show on hover
          width: 300,
          height: 300,
        })
      );

      document.getElementById("indirect-wrapper").appendChild(
        Treemap(treeDataIndirect, {
          path: (d) => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
          value: (d) => d?.size, // size of each node (file); null for internal nodes (folders)
          group: (d) => d.name.split(".")[0], // e.g., "animate" in "flare.animate.Easing"; for color
          label: (d, n) =>
            [
              ...d.name
                .split(".")
                .pop()
                .split(/(?=[A-Z][a-z])/g),
              n.value.toLocaleString("en"),
            ].join("\n"),
          title: (d, n) => `${d.name}\n${n.value.toLocaleString("en")}`, // text to show on hover
          width: 300,
          height: 300,
        })
      );
    }
  });

  return (
    <div id="treemap-wrapper">
      <div id="direct-wrapper">
        <p>Types of Species Directly Impacted</p>
      </div>
      <div id="indirect-wrapper">
        <p>Types of Species Indirectly Lost</p>
      </div>
    </div>
  );
}

export default TreeMap;
