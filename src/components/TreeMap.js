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
    { name: "total", size: 0 },
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
    { name: "total", size: 0 },
  ]);
  const [isOver, setIsOver] = useState(false);

  const incrementTreeData = (index, value, direct) => {
    let newTreeData = direct ? treeDataDirect : treeDataIndirect;
    newTreeData[index].size += Math.max(value, 0);
    newTreeData[11].size += Math.max(value, 0);
    newTreeData[0].size = 0;
    console.log(newTreeData);
    if (!direct) {
      setTreeDataIndirect(newTreeData);
    } else {
      setTreeDataDirect(newTreeData);
    }
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

      const total = treeDataIndirect[11].size || 1;
      const directTotal = treeDataDirect[11].size || 1;
      props.level > 2 &&
        document.getElementById("direct-wrapper").appendChild(
          Treemap(treeDataDirect, {
            path: (d) => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
            value: (d) =>
              d?.size > 0 && d?.name != "total"
                ? (d.size / directTotal) * 100
                : 0, // size of each node (file); null for internal nodes (folders)
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
            width: 400,
            height: 400,
          })
        );
      document.getElementById("indirect-wrapper").appendChild(
        Treemap(treeDataIndirect, {
          path: (d) => d.name.replace(/\./g, "/"), // e.g., "flare/animate/Easing"
          value: (d) =>
            d?.size > 0 && d?.name !== "total" ? (d?.size / total) * 100 : 0, // size of each node (file); null for internal nodes (folders)
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
          width: 400,
          height: 400,
        })
      );
    }
  });

  return (
    <div id="treemap-wrapper">
      {props.level > 2 && (
        <div id="direct-wrapper">
          <h2 className="level-header">
            Breakdown of Species Directly Impacted
          </h2>
        </div>
      )}
      <div id="indirect-wrapper">
        <h2 className="level-header">Breakdown Species Indirectly Lost</h2>
      </div>
    </div>
  );
}

export default TreeMap;
