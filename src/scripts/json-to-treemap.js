import * as d3 from "d3";

export default function Treemap(
  data,
  {
    // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? (d) => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? (d) => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
    children, // if hierarchical data, given a d in data, returns its children
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a leaf node d, returns the name to display on the rectangle
    group, // given a leaf node d, returns a categorical value (for color encoding)
    title, // given a leaf node d, returns its hover text
    link, // given a leaf node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links (if any)
    tile = d3.treemapBinary, // treemap strategy
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    margin = 0, // shorthand for margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    padding = 1, // shorthand for inner and outer padding
    paddingInner = padding, // to separate a node from its adjacent siblings
    paddingOuter = padding, // shorthand for top, right, bottom, and left padding
    paddingTop = paddingOuter, // to separate a node’s top edge from its children
    paddingRight = paddingOuter, // to separate a node’s right edge from its children
    paddingBottom = paddingOuter, // to separate a node’s bottom edge from its children
    paddingLeft = paddingOuter, // to separate a node’s left edge from its children
    round = true, // whether to round to exact pixels
    colors = d3.schemeTableau10, // array of colors
    fill = "#ccc", // fill for node rects (if no group color encoding)
    fillOpacity = group == null ? null : 0.6, // fill opacity for node rects
    stroke, // stroke for node rects
    strokeWidth, // stroke width for node rects
    strokeOpacity, // stroke opacity for node rects
    strokeLinejoin, // stroke line join for node rects
  } = {}
) {
  // If a path accessor is specified, we can impute the internal nodes from the slash-
  // separated path; otherwise, the tabular data must include the internal nodes, not
  // just leaves. TODO https://github.com/d3/d3-hierarchy/issues/33
  if (path != null) {
    const D = d3.map(data, (d) => d);
    const I = d3
      .map(data, path)
      .map((d) => ((d = `${d}`).startsWith("/") ? d : `/${d}`));
    const paths = new Set(I);
    for (const path of paths) {
      const parts = path.split("/");
      while ((parts.pop(), parts.length)) {
        const path = parts.join("/") || "/";
        if (paths.has(path)) continue;
        paths.add(path);
        I.push(path);
        D.push(null);
      }
    }
    id = (_, i) => I[i];
    parentId = (_, i) =>
      I[i] === "/" ? "" : I[i].slice(0, I[i].lastIndexOf("/")) || "/";
    data = D;
  }

  // If id and parentId options are specified (perhaps implicitly via the path option),
  // use d3.stratify to convert tabular data to a hierarchy; otherwise we assume that
  // the data is specified as an object {children} with nested objects (a.k.a. the
  // “flare.json” format), and use d3.hierarchy.
  const root =
    id == null && parentId == null
      ? d3.hierarchy(data, children)
      : d3.stratify().id(id).parentId(parentId)(data);

  // Compute the values of internal nodes by aggregating from the leaves.
  value == null ? root.count() : root.sum(value);

  // Prior to sorting, if a group channel is specified, construct an ordinal color scale.
  const leaves = root.leaves();
  const G = group == null ? null : leaves.map((d) => group(d.data, d));
  const color = group == null ? null : d3.scaleOrdinal(G, colors);

  // Compute labels and titles.
  const L = label == null ? null : leaves.map((d) => label(d.data, d));
  const T =
    title === undefined
      ? L
      : title == null
      ? null
      : leaves.map((d) => title(d.data, d));

  // Sort the leaves (typically by descending value for a pleasing layout).
  if (sort != null) root.sort(sort);

  // Compute the treemap layout.
  d3
    .treemap()
    .tile(tile)
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .paddingInner(paddingInner)
    .paddingTop(paddingTop)
    .paddingRight(paddingRight)
    .paddingBottom(paddingBottom)
    .paddingLeft(paddingLeft)
    .round(round)(root);

  const svg = d3
    .create("svg")
    .attr("viewBox", [-marginLeft, -marginTop, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10);

  const node = svg
    .selectAll("a")
    .data(leaves)
    .join("a")
    .attr("xlink:href", link == null ? null : (d, i) => link(d.data, d))
    .attr("target", link == null ? null : linkTarget)
    .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

  node
    .append("rect")
    .attr("fill", color ? (d, i) => color(G[i]) : fill)
    .attr("fill-opacity", fillOpacity)
    .attr("stroke", stroke)
    .attr("stroke-width", strokeWidth)
    .attr("stroke-opacity", strokeOpacity)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("height", (d) => d.y1 - d.y0);

  if (T) {
    node.append("title").text((d, i) => T[i]);
  }

  if (L) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    node
      .append("clipPath")
      .attr("id", (d, i) => `${uid}-clip-${i}`)
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    node
      .append("text")
      .selectAll("tspan")
      .data((d, i) => `${L[i]}`.split(/\n/g))
      .join("tspan")
      .attr("x", 3)
      .attr("y", (d, i, D) => `${(i === D.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
      .attr("fill-opacity", (d, i, D) => (i === D.length - 1 ? 0.7 : null))
      .text((d) => d + (isNaN(d) ? "" : "%"));
  }

  return Object.assign(svg.node(), { scales: { color } });
}
