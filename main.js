// Written by Will Kaufman, April 2020

import { Workout, Person } from './training.js';

// create svg DOM
var vis = d3.select("#graph").append("svg");
var w = 900, h = 400;
vis.attr("width", w).attr("height", h);
vis.text("The Graph").select("#graph");



// Graphics etc.

function clicked(d, i) {
  if (d3.event.defaultPrevented) return; // dragged
  
  d3.select(this).transition()
      .attr("fill", "#ffffff")
      .transition()
      .attr("fill", d => colorScale(d.getColor()));
}

function dragstarted(d) {
  d3.select(this).raise().attr("stroke", "black");
}

function dragged(d) {
  d3.select(this).attr("x", d.x = d3.event.x)
                 .attr("y", d.y = d3.event.y);
}

function dragended(d) {
  d3.select(this).attr("stroke", null);
}

var colorScale = d3.scaleOrdinal(d3.schemeSet3);

// add data

var workouts = [new Workout('bike', 80, .5), new Workout('erg', 60, .5),
                new Workout('lift', 45, .6)]

vis.selectAll("rect .workouts")
   .data(workouts)
   .enter()
   .append("svg:rect")
   .attr("class", "workouts")
   .attr("x", 1)
   .attr("y", 1)
   .attr("width", d => d.getWidth())
   .attr("height", d => d.getHeight())
   .attr("fill", d => colorScale(d.getColor()))
   .on("click", clicked)
   .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
        )
   
