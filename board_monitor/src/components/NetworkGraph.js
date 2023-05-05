import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { drag } from 'd3-drag';

const NetworkGraph = ({ data }) => {
    const ref = useRef(null);
    
  
    useEffect(() => {
      const container = d3.select(ref.current);
      const width = container.node().clientWidth;
      const height = container.node().clientHeight;
      const links = data.links.map(d => Object.create(d));
      const nodes = data.nodes.map(d => Object.create(d));

      const tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
  
      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody(-10000).strength(-50).distanceMax(0.5 * Math.min(width, height)))
        .force('center', d3.forceCenter(width / 2, height / 2));

        const drag = simulation => {
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
          
            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
          }
          
          simulation.on('tick', () => {
            link.attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
      
                node.attr('transform', d => `translate(${d.x}, ${d.y})`);
          });
  
      const link = container.append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('transform', d => `translate(${d.x}, ${d.y})`);

        // .attr('stroke-width', d => Math.sqrt(d.value));
  
    const node = container.append('g')
        .attr('stroke', 'black')
        .attr('stroke-width', 1.5)
        .selectAll('circle')
        .data(nodes)
        .join('g')
        .call(drag(simulation));;

        node.append('circle')
        .attr('r', d => 22)
            .attr('fill', d => (d.type === 'company' ? 'red' : 'blue'))
            .call(drag(simulation))
            .on('mouseover', (event, d) => {
            tooltip.style('opacity', 1);
            tooltip.html(d.label);
            })
            .on('mousemove', (event) => {
            tooltip.style('left', `${event.pageX + 10}px`);
            tooltip.style('top', `${event.pageY}px`);
            })
            .on('mouseleave', () => {
            tooltip.style('opacity', 0);
            });
        
      
        node.append('text')
            .text(d => d.label)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr('fill', 'black')
            // .call(wrap, 100);
        
      
    }, [data]);

  
      
      
      
      
      
      

  
    return (
      <svg ref={ref} />
    );
  };
  
export default NetworkGraph;
