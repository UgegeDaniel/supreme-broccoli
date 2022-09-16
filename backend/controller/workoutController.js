const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//GET all workouts
const getAllWorkouts = async (req, res) =>{
  const workouts = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workouts)
}

//GET a single workout 
const getWorkout = async (req, res) =>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"})
  }
  const workout = await Workout.findById(id)
  res.status(200).json(workout)
  if(!workout){
    return res.status(404).json({error: "no such workout found"})
  }

}
// Create new workout
const createWorkout =  async (req, res) => { 
    const {title, load, reps} = req.body

    //user error hangdling
    const emptyFeilds = [] //step 17 i
    if(!title){
      emptyFeilds.push('title')
    } else if(!load){
      emptyFeilds.push('load')
    } else if(!reps){
      emptyFeilds.push('reps')
    }
    if(emptyFeilds.length > 0){
      return res.status(400).json({error: "Please fill in all the feilds", emptyFeilds})
    }
    
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(201).json(workout)
    }catch(error){
        res.status(400).json({error: error.meassage})
    }
    // res.json({msg: 'POST a new workout'})
}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: "No such workout"})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: "no such workout found"})
      }
    res.status(200).json(workout)
}
// update a single workout

const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: "No such workout"})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: "no such workout found"})
      }
      res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getAllWorkouts, 
    getWorkout,
    deleteWorkout,
    updateWorkout
}