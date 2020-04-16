
class Workout {
  /* A workout object specifices type of workout,
  the volume of the workout, and intensity
  
  Naively, I'll say intensity is measured as % of maximum
  (power for cardio, weight for lifts)
  (and should probably update this later)
  Volume for cardio workouts is measured in minutes
  and for lifting workouts is measured in reps
  
  time: Time at which workout occurs
  
  Ex: bike workout, 2 hours long
  */
  constructor(type, volume, intensity, time) {
    this.type = type;
    this.volume = volume;
    this.intensity = intensity;
    this.time = time;
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

class Person {
  // to keep track of stress, recovery, etc.
  constructor() {
    this.generalStress = 0 // general stress level
    this.specificStress = {} // specific stress level, by workout type
    this.fitness = {} // fitness level, by workout type
    // TODO "fitness" is a general term, and is described by maximal output
    // at different durations, repetitions, etc.
    // if the stress is too far above the fitness level, additional stress or
    // impeded recovery?
  }
  
  addGeneralStress(s) {
    this.generalStress += s
  }
  
  addSpecificStress(type, s) {
    // check if already has type, then
  }
  
  recover(r) {
    
  }
  
  setFitness(type, f) {
    
  }
  
  getProjectedStress(workouts, time) {
    /* Get projected stress (both general and specific)
    from a list of workouts over the specified time period
    */
  }
}


export { Workout, Person };
