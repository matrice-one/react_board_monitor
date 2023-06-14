import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from '@mui/material/styles';

const NetworkGraph = ({ data, searchTerm }) => {
  const ref = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (data === null || !Array.isArray(data.links) || !Array.isArray(data.nodes)) {
      return;
    }

    const container = d3.select(ref.current);
    const width = container.node().clientWidth;
    const height = container.node().clientHeight;

    const nodes = data.nodes.map((d) => Object.create(d));
    const links = data.links.map((d) => Object.create(d));

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(150)
      )
      .force(
        "charge",
        d3
          .forceManyBody(-10000)
          .strength(-50)
          .distanceMax(0.5 * Math.min(width, height))
      )
      .force("center", d3.forceCenter(width / 2, height / 2));

    const drag = (simulation) => {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
    };

    let linkElements = container.select("g.links").selectAll("line");
    let nodeGroups = container.select("g.nodes").selectAll("g");

    linkElements = linkElements
      .data(links, (d) => d.id)
      .join(
        (enter) => enter.append("line"),
        (update) => update,
        (exit) => exit.remove()
      )
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6);

    nodeGroups = nodeGroups
      .data(nodes, (d) => d.id)
      .join(
        (enter) => enter.append("g"),
        (update) => update,
        (exit) => exit.remove()
      )
      .call(drag(simulation));

    nodeGroups
      .append("circle")
      .attr("r", (d) => 22)
      .attr("fill", (node) => {
        if (node.label.toLowerCase() === searchTerm.toLowerCase()) {
          return theme.palette.accent.main;
        } else {
          return node.type === 'company' ? theme.palette.secondary.main : theme.palette.tertiary.main;
        }
      });

    nodeGroups
      .append("text")
      .text((d) => d.label)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "black");

    simulation.on("tick", () => {
      linkElements
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      nodeGroups.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });
  }, [data, searchTerm, theme.palette.secondary.main, theme.palette.tertiary.main, theme.palette.accent.main]);

  return (
    <svg ref={ref} style={{ width: "100%", height: "100%" }}>
      <g className="links" />
      <g className="nodes" />
    </svg>
  );
};

export default NetworkGraph;
