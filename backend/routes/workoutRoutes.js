//step 11 setup express router
const express = require('express');
const Workout = require('../models/workoutModel')
const {createWorkout, getAllWorkouts,  getWorkout, deleteWorkout, updateWorkout} = require('../controller/workoutController')

const router = express.Router();

//step 11 i setup routes with / endpoints 
//GET all workouts
// (req, res)=>{
//     res.json({msg: 'GET all workouts'})
// }
router.get('/', getAllWorkouts)
//GET single workout by id
router.get('/:id', getWorkout)

//POST a new workout 
router.post('/', createWorkout)
    //step 14 iii change the callback function to be async use mongoose model to save data coming from req.body
   //15 ii move the function body to the controller file and replace with the name of the function imported from controller

//DELETE a workout by id 
 router.delete('/:id', deleteWorkout)

//UPDATE a workout
 router.put('/:id', updateWorkout)

//step 11 ii exports
module.exports= router