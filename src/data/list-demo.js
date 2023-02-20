export const nodeList1 = [
  {
    index: 0,
    speciesID: 8,
    biomass: 1,
    organismType: "Sea Urchin",
    nodeColor: "Orange/brown-13",
    nodeShape: "Circle",
    nodeName: "Green Sea Urchin",
    trophicLevel: 2.5,
    desc: "Green sea urchins are a type of spiny echinoderm that lives in the intertidal ecosystem. They are shaped like a sphere and have hard shells.",
    imgFile: "urchin.jpg",
    imgCaption: "Close up of Green Sea Urchin on exposed rock",
  }
]

export const edgeList1 = [
];

export const nodeList2 = [
  {
    index: 0,
    speciesID: 8,
    biomass: 1,
    organismType: "Sea Urchin",
    nodeColor: "Orange/brown-13",
    nodeShape: "Circle",
    nodeName: "Green Sea Urchin",
    trophicLevel: 2.5,
    desc: "Green sea urchins are a type of spiny echinoderm that lives in the intertidal ecosystem. They are shaped like a sphere and have hard shells.",
    imgFile: "urchin.jpg",
    imgCaption: "Close up of Green Sea Urchin on exposed rock",
  },
  {
    index: 1,
    speciesID: 14,
    biomass: 1,
    organismType: "Bird",
    nodeColor: "Maroon-11",
    nodeShape: "Circle",
    nodeName: "Great black-beaked gull",
    trophicLevel: 3.75,
    desc: "Great black beaked gulls are a very common type of bird. They are the largest species of gull in the world.",
    imgFile: "gull.jpg",
    imgCaption: "Great black-beaked gull standing on a rock in a bay",
  }
]


export const edgeList2 = [
  { target: 0, source: 1, Type: "Feeding" },
];

export const nodeList3 = [
  {
    index: 0,
    speciesID: 8,
    biomass: 1,
    organismType: "Sea Urchin",
    nodeColor: "Orange/brown-13",
    nodeShape: "Circle",
    nodeName: "Green Sea Urchin",
    trophicLevel: 2.5,
    desc: "Green sea urchins are a type of spiny echinoderm that lives in the intertidal ecosystem. They are shaped like a sphere and have hard shells.",
    imgFile: "urchin.jpg",
    imgCaption: "Close up of Green Sea Urchin on exposed rock",
  },
  {
    index: 1,
    speciesID: 14,
    biomass: 1,
    organismType: "Bird",
    nodeColor: "Maroon-11",
    nodeShape: "Circle",
    nodeName: "Great black-beaked gull",
    trophicLevel: 3.75,
    desc: "Great black beaked gulls are a very common type of bird. They are the largest species of gull in the world.",
    imgFile: "gull.jpg",
    imgCaption: "Great black-beaked gull standing on a rock in a bay",
  },
  {
    index: 2,
    speciesID: 850,
    biomass: 0.369631471,
    organismType: "Ecosystem Service",
    nodeColor: "Dark Pink-4",
    nodeShape: "Circle",
    nodeName: "Birdwatching",
    trophicLevel: 5.914905607,
    desc: "Birdwatching, or birding, is a type of wildlife viewing, where people track, look and listen for birds. This can be done for recreation and/or citizen science.",
    imgFile: "birdwatch.jpg",
    imgCaption: "Binoculars on bird guide.",
  },
];

export const edgeList3 = [
  { target: 0, source: 1, Type: "Feeding" },
  { target: 1, source: 2, Type: "ES" },
];

export const levels = [
  {
    level: 1,
    intro:
      "",
    objective:
      "",
    topBarCopy:
      "Welcome to The Food Web Game! Here is a small demo to get you going, on the screen is a node, hover it to learn more about the species it represents.",
    removableIDs: [],
    initialKills: 0,
    saves: 0,
    win: "",
    lose: "",
    maintainReq: 0,
    shownGraphs: [],
  },
  {
    level: 2,
    intro:
      "",
    objective:
      "",
    topBarCopy:
      "We now have two nodes, and a link between them showing that this gull eats the sea urchin.",
    removableIDs: [],
    initialKills: 0,
    saves: 0,
    win: "",
    lose: "",
    maintainReq: 0,
    shownGraphs: [],
  },
  
{
    level: 3,
    intro:
      "",
    objective:
      "",
    topBarCopy:
      "Lastly, we have these pink squares, showcasing ecosystem services. This one is for birdwatching, so it has a direct relationship with the gull.",
    removableIDs: [],
    initialKills: 0,
    saves: 0,
    win: "",
    lose: "",
    maintainReq: 0,
    shownGraphs: [],
  }
]


export const colors = [
  { name: "Black-1", hex: "#000" },
  { name: "Dark Teal-2", hex: "#004949" },
  { name: "Teal-3", hex: "#009292" },
  { name: "Dark Pink-4", hex: "#ff6db6" },
  { name: "Pink-5", hex: "#ffb6db" },
  { name: "Dark Purple-6", hex: "#490092" },
  { name: "Blue-7", hex: "#006ddb" },
  { name: "Purple-8", hex: "#b66dff" },
  { name: "Sky Blue-9", hex: "#6db6ff" },
  { name: "Light Blue-10", hex: "#b6dbff" },
  { name: "Maroon-11", hex: "#920000" },
  { name: "Brown-12", hex: "#924900" },
  { name: "Orange/brown-13", hex: "#db6d00" },
  { name: "Bright Green-14", hex: "#24ff24" },
  { name: "Light Yellow-15", hex: "#ffff6d" },
];

