// Written by Will Kaufman, April 2020

// randomly color all the paragraphs
// d3.selectAll("p").style("color", function() {
//   return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });

// create svg DOM
var vis = d3.select("#graph").append("svg");

var w = 900; h = 400;
vis.attr("width", w).attr("height", h);

vis.text("The Graph").select("#graph");

class Workout {
  // a workout object specifices type of workout,
  // the volume of the workout, and intensity
  //
  // Naively, I'll say intensity is measured as % of maximum (power for
 // cardio, weight for lifts)
  // (and should probably update this later)
  // Volume for cardio workouts is measured in minutes
  // and for lifting workouts is measured in reps
  //
  // Ex: bike workout, 2 hours long
  constructor(type, volume, intensity) {
    this.type = type;
    this.volume = volume;
    this.intensity = intensity
  }
  
  static workoutTypes = ['row', 'erg', 'bike', 'run', 'lift', 'swim', 'hike'];
  
  get stress() {
    return this.getStress();
  }
  
  getStress() {
    return this.volume * this.intensity;
  }
  
  getWidth() {
    return this.volume * 1.5;
  }
  getHeight() {
    return this.intensity * 200;
  }
  getColor() {
    return Workout.workoutTypes.indexOf(this.type)
  }
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
   .attr("fill", d => colorScale(d.getColor()));
