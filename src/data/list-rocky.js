export const nodeList1 = [
  {
    index: 0,
    speciesID: 1,
    biomass: 1,
    organismType: "Plant",
    nodeColor: "Bright Green-14",
    nodeShape: "Circle",
    nodeName: "Rockweed",
    trophicLevel: 1.0,
    desc: "Rockweed is a type of brown macroalgae. ",
    imgFile: "rockweed.jpg",
    imgCaption: "Clusters of rockweed algae on exposed rock",
  },
  {
    index: 1,
    speciesID: 5,
    biomass: 1,
    organismType: "Mollusc",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Common Periwinkle",
    trophicLevel: 2.0,
    desc: "Common periwinkles are a type of snail and live on rocks in the intertidal zone. It is vulnerable to ocean acidification.",
    imgFile: "periwinkle.jpeg",
    imgCaption: "Common periwinkle snail on exposed rock",
  },
  {
    index: 2,
    speciesID: 9,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "European Green Crab",
    trophicLevel: 3.0,
    desc: "European green crabs are a small shore crab that is an invasive species in the United States.",
    imgFile: "green-crab.jpeg",
    imgCaption: "European green crab in rocky area",
  },
];

export const edgeList1 = [
  { target: 0, source: 1, Type: "Feeding" },
  { target: 1, source: 2, Type: "Feeding" },
];

export const nodeList2 = [
  {
    index: 0,
    speciesID: 1,
    biomass: 1,
    organismType: "Plant",
    nodeColor: "Bright Green-14",
    nodeShape: "Circle",
    nodeName: "Rockweed",
    trophicLevel: 1.0,
    desc: "Rockweed is a type of brown macroalgae. ",
    imgFile: "rockweed.jpg",
    imgCaption: "Clusters of rockweed algae on exposed rock",
  },
  {
    index: 1,
    speciesID: 2,
    biomass: 1,
    organismType: "Plankton",
    nodeColor: "Light Yellow-15",
    nodeShape: "Circle",
    nodeName: "Phytoplankton",
    trophicLevel: 1.0,
    desc: "Phytoplankton are plankton consisting of microscopic plants.",
    imgFile: "phyto.jpg",
    imgCaption: "Microscope image of one type of phytoplankton.",
  },
  {
    index: 2,
    speciesID: 3,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Blue Mussel",
    trophicLevel: 2.0,
    desc: "The Blue Mussel is a medium-sized, edible mussel. It is vulnerable to ocean acidification and pollution.",
    imgFile: "b-mussel.jpg",
    imgCaption: "Blue mussels in exposed algae on rock.",
  },
  {
    index: 3,
    speciesID: 5,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Common Periwinkle",
    trophicLevel: 2.0,
    desc: "Common periwinkles are a type of snail and live on rocks in the intertidal zone. It is vulnerable to ocean acidification.",
    imgFile: "periwinkle.jpeg",
    imgCaption: "Common periwinkle snail on exposed rock",
  },
  {
    index: 4,
    speciesID: 7,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Dog Whelk",
    trophicLevel: 3.0,
    desc: "Dog whelk are a type of predatory sea snail. It is vulnerable to ocean acidification.",
    imgFile: "dog-whelk.jpeg",
    imgCaption: "Two Dog whelk on exposed rock surrounded by small barnacles",
  },
  {
    index: 5,
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
    index: 6,
    speciesID: 9,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "European Green Crab",
    trophicLevel: 3.0,
    desc: "European green crabs are a small shore crab that is an invasive species in the United States.",
    imgFile: "green-crab.jpeg",
    imgCaption: "European green crab in rocky area",
  },
];

export const edgeList2 = [
  { target: 0, source: 3, Type: "Feeding" },
  { target: 0, source: 5, Type: "Feeding" },
  { target: 1, source: 2, Type: "Feeding" },
  { target: 2, source: 4, Type: "Feeding" },
  { target: 2, source: 5, Type: "Feeding" },
  { target: 3, source: 6, Type: "Feeding" },
];

export const nodeList3 = [
  {
    index: 0,
    speciesID: 1,
    biomass: 1,
    organismType: "Plant",
    nodeColor: "Bright Green-14",
    nodeShape: "Circle",
    nodeName: "Rockweed",
    trophicLevel: 1.0,
    desc: "Rockweed is a type of brown macroalgae. ",
    imgFile: "rockweed.jpg",
    imgCaption: "Clusters of rockweed algae on exposed rock",
  },
  {
    index: 1,
    speciesID: 2,
    biomass: 1,
    organismType: "Plankton",
    nodeColor: "Light Yellow-15",
    nodeShape: "Circle",
    nodeName: "Phytoplankton",
    trophicLevel: 1.0,
    desc: "Phytoplankton are plankton consisting of microscopic plants.",
    imgFile: "phyto.jpg",
    imgCaption: "Microscope image of one type of phytoplankton.",
  },
  {
    index: 2,
    speciesID: 3,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Blue Mussel",
    trophicLevel: 2.0,
    desc: "The Blue Mussel is a medium-sized, edible mussel. It is vulnerable to ocean acidification and pollution.",
    imgFile: "b-mussel.jpg",
    imgCaption: "Blue mussels in exposed algae on rock.",
  },
  {
    index: 3,
    speciesID: 4,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Barnacle",
    trophicLevel: 2.0,
    desc: "Barnacles are a type of crustacean that release a cement-like substance to stick to rocs in the intertidal zone.",
    imgFile: "barnacles.jpg",
    imgCaption: "Close up image of acorn barnacles",
  },
  {
    index: 4,
    speciesID: 5,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Common Periwinkle",
    trophicLevel: 2.0,
    desc: "Common periwinkles are a type of snail and live on rocks in the intertidal zone. It is vulnerable to ocean acidification.",
    imgFile: "periwinkle.jpeg",
    imgCaption: "Common periwinkle snail on exposed rock",
  },
  {
    index: 5,
    speciesID: 6,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Baltic Isopod",
    trophicLevel: 2.0,
    desc: "Baltic isopods are a type of crustacean that can live in extreme conditions. They also have four sets of jaws! ",
    imgFile: "isopod.jpeg",
    imgCaption: "Baltic isopod on exposed rock surrounded by algae",
  },
  {
    index: 6,
    speciesID: 7,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Dog Whelk",
    trophicLevel: 3.0,
    desc: "Dog whelk are a type of predatory sea snail. It is vulnerable to ocean acidification.",
    imgFile: "dog-whelk.jpeg",
    imgCaption: "Two Dog whelk on exposed rock surrounded by small barnacles",
  },
  // {
  //   index: 7,
  //   speciesID: 8,
  //   biomass: 1,
  //   organismType: "Sea-Urchin",
  //   nodeColor: "Orange/brown-13",
  //   nodeShape: "Circle",
  //   nodeName: "Green Sea Urchin",
  //   trophicLevel: 2.5,
  //   desc: "Green sea urchins are a type of spiny echinoderm that lives in the intertidal ecosystem. They are shaped like a sphere and have hard shells.",
  //   imgFile: "urchin.jpg",
  //   imgCaption: "Close up of Green Sea Urchin on exposed rock",
  // },
  {
    index: 7,
    speciesID: 9,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "European Green Crab",
    trophicLevel: 2.0,
    desc: "European green crabs are a small shore crab that is an invasive species in the United States.",
    imgFile: "green-crab.jpeg",
    imgCaption: "European green crab in rocky area",
  },
  {
    index: 8,
    speciesID: 11,
    biomass: 1,
    organismType: "Fish",
    nodeColor: "Blue-7",
    nodeShape: "Circle",
    nodeName: "Rock Gunnel",
    trophicLevel: 3.0,
    desc: "Rock gunnels are an eel-like fish with long bodies that live in the intertidal zone.",
    imgFile: "rock-gunnel.jpg",
    imgCaption:
      "Rock gunnel in small pool of water surrounded by rock and other organisms",
  },
];

export const edgeList3 = [
  { target: 0, source: 5, Type: "Feeding" },
  { target: 0, source: 4, Type: "Feeding" },
  { target: 1, source: 2, Type: "Feeding" },
  { target: 1, source: 3, Type: "Feeding" },
  { target: 2, source: 6, Type: "Feeding" },
  { target: 3, source: 6, Type: "Feeding" },
  { target: 3, source: 7, Type: "Feeding" },
  { target: 3, source: 7, Type: "Feeding" },
  { target: 4, source: 7, Type: "Feeding" },
  { target: 5, source: 8, Type: "Feeding" },
];

export const nodeList4 = [
  {
    index: 0,
    speciesID: 1,
    biomass: 1,
    organismType: "Plant",
    nodeColor: "Bright Green-14",
    nodeShape: "Circle",
    nodeName: "Rockweed",
    trophicLevel: 1.0,
    desc: "Rockweed is a type of brown macroalgae. ",
    imgFile: "rockweed.jpg",
    imgCaption: "Clusters of rockweed algae on exposed rock",
  },
  {
    index: 1,
    speciesID: 2,
    biomass: 1,
    organismType: "Plankton",
    nodeColor: "Light Yellow-15",
    nodeShape: "Circle",
    nodeName: "Phytoplankton",
    trophicLevel: 1.0,
    desc: "Phytoplankton are plankton consisting of microscopic plants.",
    imgFile: "phyto.jpg",
    imgCaption: "Microscope image of one type of phytoplankton.",
  },
  {
    index: 2,
    speciesID: 3,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Blue Mussel",
    trophicLevel: 2.0,
    desc: "The Blue Mussel is a medium-sized, edible mussel. It is vulnerable to ocean acidification and pollution.",
    imgFile: "b-mussel.jpg",
    imgCaption: "Blue mussels in exposed algae on rock.",
  },
  {
    index: 3,
    speciesID: 4,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Barnacle",
    trophicLevel: 2.0,
    desc: "Barnacles are a type of crustacean that release a cement-like substance to stick to rocs in the intertidal zone.",
    imgFile: "barnacles.jpg",
    imgCaption: "Close up image of acorn barnacles",
  },
  {
    index: 4,
    speciesID: 5,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Common Periwinkle",
    trophicLevel: 2.0,
    desc: "Common periwinkles are a type of snail and live on rocks in the intertidal zone. It is vulnerable to ocean acidification.",
    imgFile: "periwinkle.jpeg",
    imgCaption: "Common periwinkle snail on exposed rock",
  },
  {
    index: 5,
    speciesID: 6,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Baltic Isopod",
    trophicLevel: 2.0,
    desc: "Baltic isopods are a type of crustacean that can live in extreme conditions. They also have four sets of jaws! ",
    imgFile: "isopod.jpeg",
    imgCaption: "Baltic isopod on exposed rock surrounded by algae",
  },
  {
    index: 6,
    speciesID: 7,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Dog Whelk",
    trophicLevel: 3.0,
    desc: "Dog whelk are a type of predatory sea snail. It is vulnerable to ocean acidification.",
    imgFile: "dog-whelk.jpeg",
    imgCaption: "Two Dog whelk on exposed rock surrounded by small barnacles",
  },
  // {
  //   index: 7,
  //   speciesID: 8,
  //   biomass: 1,
  //   organismType: "Sea-Urchin",
  //   nodeColor: "Orange/brown-13",
  //   nodeShape: "Circle",
  //   nodeName: "Green Sea Urchin",
  //   trophicLevel: 2.5,
  //   desc: "Green sea urchins are a type of spiny echinoderm that lives in the intertidal ecosystem. They are shaped like a sphere and have hard shells.",
  //   imgFile: "urchin.jpg",
  //   imgCaption: "Close up of Green Sea Urchin on exposed rock",
  // },
  {
    index: 7,
    speciesID: 9,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "European Green Crab",
    trophicLevel: 3.0,
    desc: "European green crabs are a small shore crab that is an invasive species in the United States.",
    imgFile: "green-crab.jpeg",
    imgCaption: "European green crab in rocky area",
  },
  {
    index: 8,
    speciesID: 11,
    biomass: 1,
    organismType: "Fish",
    nodeColor: "Blue-7",
    nodeShape: "Circle",
    nodeName: "Rock Gunnel",
    trophicLevel: 3.0,
    desc: "Rock gunnels are an eel-like fish with long bodies that live in the intertidal zone.",
    imgFile: "rock-gunnel.jpg",
    imgCaption:
      "Rock gunnel in small pool of water surrounded by rock and other organisms",
  },
  {
    index: 9,
    speciesID: 12,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Jonah Crab",
    trophicLevel: 3.5,
    desc: "Jonah crabs are a species of shore crab. It is vulnerable to ocean acidification.",
    imgFile: "jonah-crab.jpeg",
    imgCaption: "Jonah crab sitting on a bed of algae and exposed rock.",
  },
  {
    index: 10,
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
];

export const edgeList4 = [
  { target: 0, source: 5, Type: "Feeding" },
  { target: 0, source: 4, Type: "Feeding" },
  { target: 1, source: 2, Type: "Feeding" },
  { target: 1, source: 3, Type: "Feeding" },
  { target: 2, source: 6, Type: "Feeding" },
  { target: 2, source: 9, Type: "Feeding" },
  { target: 3, source: 6, Type: "Feeding" },
  { target: 3, source: 7, Type: "Feeding" },
  { target: 3, source: 9, Type: "Feeding" },
  { target: 3, source: 10, Type: "Feeding" },
  { target: 3, source: 7, Type: "Feeding" },
  { target: 4, source: 7, Type: "Feeding" },
  { target: 5, source: 8, Type: "Feeding" },
  { target: 6, source: 9, Type: "Feeding" },
  { target: 7, source: 10, Type: "Feeding" },
  { target: 7, source: 9, Type: "Feeding" },
  { target: 9, source: 10, Type: "Feeding" },
];

export const nodeList5 = [
  {
    index: 0,
    speciesID: 1,
    biomass: 1,
    organismType: "Plant",
    nodeColor: "Bright Green-14",
    nodeShape: "Circle",
    nodeName: "Rockweed",
    trophicLevel: 1.0,
    desc: "Rockweed is a type of brown macroalgae. ",
    imgFile: "rockweed.jpg",
    imgCaption: "Clusters of rockweed algae on exposed rock",
  },
  {
    index: 1,
    speciesID: 2,
    biomass: 1,
    organismType: "Plankton",
    nodeColor: "Light Yellow-15",
    nodeShape: "Circle",
    nodeName: "Phytoplankton",
    trophicLevel: 1.0,
    desc: "Phytoplankton are plankton consisting of microscopic plants.",
    imgFile: "phyto.jpg",
    imgCaption: "Microscope image of one type of phytoplankton.",
  },
  {
    index: 2,
    speciesID: 3,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Blue Mussel",
    trophicLevel: 2.0,
    desc: "The Blue Mussel is a medium-sized, edible mussel. It is vulnerable to ocean acidification and pollution.",
    imgFile: "b-mussel.jpg",
    imgCaption: "Blue mussels in exposed algae on rock.",
  },
  {
    index: 3,
    speciesID: 4,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Barnacle",
    trophicLevel: 2.0,
    desc: "Barnacles are a type of crustacean that release a cement-like substance to stick to rocs in the intertidal zone.",
    imgFile: "barnacles.jpg",
    imgCaption: "Close up image of acorn barnacles",
  },
  {
    index: 4,
    speciesID: 5,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Common Periwinkle",
    trophicLevel: 2.0,
    desc: "Common periwinkles are a type of snail and live on rocks in the intertidal zone. It is vulnerable to ocean acidification.",
    imgFile: "periwinkle.jpeg",
    imgCaption: "Common periwinkle snail on exposed rock",
  },
  {
    index: 5,
    speciesID: 6,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Baltic Isopod",
    trophicLevel: 2.0,
    desc: "Baltic isopods are a type of crustacean that can live in extreme conditions. They also have four sets of jaws! ",
    imgFile: "isopod.jpeg",
    imgCaption: "Baltic isopod on exposed rock surrounded by algae",
  },
  {
    index: 6,
    speciesID: 7,
    biomass: 1,
    organismType: "Snail",
    nodeColor: "Dark Teal-2",
    nodeShape: "Circle",
    nodeName: "Dog Whelk",
    trophicLevel: 3.0,
    desc: "Dog whelk are a type of predatory sea snail. It is vulnerable to ocean acidification.",
    imgFile: "dog-whelk.jpeg",
    imgCaption: "Two Dog whelk on exposed rock surrounded by small barnacles",
  },
  {
    index: 7,
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
    index: 8,
    speciesID: 9,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "European Green Crab",
    trophicLevel: 3.0,
    desc: "European green crabs are a small shore crab that is an invasive species in the United States.",
    imgFile: "green-crab.jpeg",
    imgCaption: "European green crab in rocky area",
  },
  {
    index: 9,
    speciesID: 10,
    biomass: 1,
    organismType: "Fish",
    nodeColor: "Blue-7",
    nodeShape: "Circle",
    nodeName: "Tautog",
    trophicLevel: 3.0,
    desc: "Tautog are a type of salt-water fish that have strong teeth.",
    imgFile: "tautog.jpeg",
    imgCaption: "Tautog fish in someone's hand above a dish of water",
  },
  {
    index: 10,
    speciesID: 11,
    biomass: 1,
    organismType: "Fish",
    nodeColor: "Blue-7",
    nodeShape: "Circle",
    nodeName: "Rock Gunnel",
    trophicLevel: 3.0,
    desc: "Rock gunnels are an eel-like fish with long bodies that live in the intertidal zone.",
    imgFile: "rock-gunnel.jpg",
    imgCaption:
      "Rock gunnel in small pool of water surrounded by rock and other organisms",
  },
  {
    index: 11,
    speciesID: 12,
    biomass: 1,
    organismType: "Crustacean",
    nodeColor: "Teal-3",
    nodeShape: "Circle",
    nodeName: "Jonah Crab",
    trophicLevel: 3.5,
    desc: "Jonah crabs are a species of shore crab. It is vulnerable to ocean acidification.",
    imgFile: "jonah-crab.jpeg",
    imgCaption: "Jonah crab sitting on a bed of algae and exposed rock.",
  },
  {
    index: 12,
    speciesID: 13,
    biomass: 1,
    organismType: "Bird",
    nodeColor: "Maroon-11",
    nodeShape: "Circle",
    nodeName: "Purple sandpiper",
    trophicLevel: 3.33,
    desc: "Purple sandpiepers are a type of bird that lives on the rocky shores of intertidal zones.",
    imgFile: "purple-sandpiper.jpg",
    imgCaption:
      "Purple sandpiper standing on exposed rock surrounded by empty shells",
  },
  {
    index: 13,
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
];

export const edgeList5 = [
  { target: 0, source: 5, Type: "Feeding" },
  { target: 0, source: 4, Type: "Feeding" },
  { target: 0, source: 7, Type: "Feeding" },
  { target: 1, source: 2, Type: "Feeding" },
  { target: 1, source: 3, Type: "Feeding" },
  { target: 2, source: 12, Type: "Feeding" },
  { target: 2, source: 6, Type: "Feeding" },
  { target: 2, source: 11, Type: "Feeding" },
  { target: 2, source: 7, Type: "Feeding" },
  { target: 2, source: 9, Type: "Feeding" },
  { target: 3, source: 6, Type: "Feeding" },
  { target: 3, source: 8, Type: "Feeding" },
  { target: 3, source: 11, Type: "Feeding" },
  { target: 3, source: 13, Type: "Feeding" },
  { target: 3, source: 8, Type: "Feeding" },
  { target: 4, source: 12, Type: "Feeding" },
  { target: 4, source: 8, Type: "Feeding" },
  { target: 5, source: 9, Type: "Feeding" },
  { target: 5, source: 10, Type: "Feeding" },
  { target: 6, source: 12, Type: "Feeding" },
  { target: 6, source: 11, Type: "Feeding" },
  { target: 7, source: 11, Type: "Feeding" },
  { target: 7, source: 13, Type: "Feeding" },
  { target: 8, source: 13, Type: "Feeding" },
  { target: 8, source: 11, Type: "Feeding" },
  { target: 11, source: 13, Type: "Feeding" },
];

export const levels = [
  {
    level: 1,
    intro:
      "You a marine scientist studying the rocky intertidal ecosystem in Port Clyde, Maine, USA. Your goal is to build an understanding of the food web in this ecosystem so that you can make recommendations about which species to protect. First, you look at one small square area, called a quadrat, in a single tide pool. You find three species interacting with each other.",
    objective:
      "Temperature increases in the ocean are going to impact many organisms. While you are in the field you are preparing to make recommendations about which species to protect. Using the information that you have, which species would you protect if you wanted to maintain this food chain?",
    topBarCopy:
      "Level 1 Goal: Protect (left click [or single tap]) 1 species to maintain all 3 species in this food chain.",
    removableIDs: [1],
    initialKills: 1,
    saves: 1,
    win: "You won! ",
    lose: "You lost! Which species is the base of the food chain?",
    shownGraphs: [],
  },
  {
    level: 2,
    intro:
      "After spending time observing that small quadrat in the tide pool, you expand your observations to multiple areas in the tide pool. You observed a few more species interacting.",
    objective:
      "Temperature increases in the ocean are going to impact many organisms. Using the new information that you have, which species would you protect if you wanted to maintain 5 of the species in the food web?",
    topBarCopy:
      "Level 2 Goal: Protect (left click [or single tap]) 1 species to  maintain 5 of the species in the food web.",
    initialKills: 2,
    removableIDs: [1, 5],
    saves: 1,
    win: "You Won!",
    lose: "You lost! Are there any consumers that don't have as many resources?",
    shownGraphs: [],
  },
  {
    level: 3,
    intro:
      "For this survey, you expand your observations to another tide pool where you make observe species that interact within the quadrat.",
    objective:
      "Temperature increases in the ocean are going to impact many organisms. Using the new information that you have, which species would you protect if you wanted to maintain 7 of the species in the food web?",
    topBarCopy:
      "evel 3 Goal: Protect (left click [or single tap]) 1 species to maintain 7 species in the food web",
    initialKills: 3,
    removableIDs: [3, 5, 11],
    saves: 1,
    win: "You won!",
    lose: "You lost! Are there any consumers that don't have as many resources?",
    shownGraphs: [],
  },
  [
    {
      level: 4,
      intro:
        "You now want to make sure that you make observations in another tidal zone. ",
      objective:
        "Temperature increases in the ocean are going to impact many organisms. Which species would you protect if you wanted to maintain 8 of the species in the food web?",
      topBarCopy:
        "Level 4 Goal: Protect (left click [or single tap]) 2 species to maintain at least 8 of the species in the food web.",
      saves: 2,
      initialKills: 3,
      removableIDs: [3, 5, 7],
      win: "You won!",
      lose: "You lost! Remember, consumers need to have most of their resources available to stay alive.",
      shownGraphs: [],
    },
  ],
  [
    {},
    {
      level: 5,
      intro:
        "For your final survey you take a step back and make observations of your whole field site. ",
      objective:
        "The rocky shore ecosystem is a great place to watch birds. Ocean acidification, where the ocean's pH is lowering and becoming more acidic, makes it hard for organisms to build their shells. It also makes them more vulnerable to predation. Which species would you protect to make sure people can still watch birds here?",
      topBarCopy:
        "Level 5 Goal: Protect (left click [or single tap]) 3 species to maintain a birdwatching ecosystem service.",
      saves: 3,
      removableIDs: [3, 5, 7],
      initialKills: 3,
      win: "You Won!",
      lose: "You lost! Remember, consumers need to have most of their resources available to stay alive.",
      shownGraphs: [],
    },
  ],
];
