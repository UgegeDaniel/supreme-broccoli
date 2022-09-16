//step 14 i create mongoose schema for each property we wish to save in the db
//step 14 ii export model and schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const workoutSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)