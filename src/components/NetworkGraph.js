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
    const links = data.links.map((d) => Object.create(d));
    const nodes = data.nodes.map((d) => Object.create(d));

    function forceContainment() {
      for (let node of nodes) {
        node.x = Math.max(30, Math.min(width - 30, node.x)); // 30 here should be at least the radius of your nodes
        node.y = Math.max(30, Math.min(height - 30, node.y));
      }
    }

    
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

      const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("radial", d3.forceRadial((d) => (d.type === 'company' ? 50 : 200), width / 2, height / 2))
      .force("containment", forceContainment);
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


      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    };

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });

    const link = container
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.3)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    // .attr('stroke-width', d => Math.sqrt(d.value));

    const node = container
      .append("g")
      .attr("stroke", "black")
      .attr("stroke-width", 0.7)
      .selectAll("circle")
      .data(nodes)
      .join("g")
      .call(drag(simulation));

    node
      .append("circle")
      .attr("r", (d) => 22)
      .attr("fill", node => {
        console.log(node.label, searchTerm, node.label.toLowerCase() === searchTerm.toLowerCase())
        if (node.label.toLowerCase() === searchTerm.toLowerCase()) {
          return theme.palette.accent.main;  // searched node color
        } else {
          return node.type === 'company' ? theme.palette.secondary.main : theme.palette.tertiary.main;  // company nodes are red, individual nodes are black
        }
      }).call(drag(simulation))
      .on("mouseover", (event, d) => {
        tooltip.style("opacity", 1);
        tooltip.html(d.label);
      })
      .on("mousemove", (event) => {
        tooltip.style("left", `${event.pageX + 10}px`);
        tooltip.style("top", `${event.pageY}px`);
      })
      .on("mouseleave", () => {
        tooltip.style("opacity", 0);
      });

    node
      .append("text")
      .text((d) => d.label)
      .attr("text-anchor", "top")
      .attr("alignment-baseline", "top")
      .attr("fill", "black");
    // .call(wrap, 100);
  }, [data, searchTerm, theme.palette.secondary.main, theme.palette.tertiary.main, theme.palette.accent.main]);

  
  return  <svg ref={ref} style={{ width: '100%', height: '100%' }} />;
};

export default NetworkGraph;
