// import {useEffect, useState} from 'react'
import {useEffect} from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext' //fe-step-9-i
import WorkoutItem from './WorkoutItem'
const Workouts = () => {
    // const [workouts, setWorkouts]= useState([])
     const {workouts, dispatch} = useWorkoutsContext() //fe-step-9-ii
    useEffect(()=>{
        const fetchWorkouts = async () => {
            // const response = await fetch('http://localhost:4000/api/workouts') //if you are not using proxy
            //after setting up proxy 
            const response = await fetch('http://localhost:4000/api/workouts')
            const data = await response.json();
            if(response.ok){
                // setWorkouts(data) 
                dispatch({type:'SET_WORKOUTS', payload:data}) //fe-step-9-iii
            }
        }
        fetchWorkouts()
    //}, [workouts])  //if you are not using custom hook, this works 
    }, [dispatch])//fe-step-5-ii //if the dependency array is empty this function will render once only when this component first renders
    return(
        <div className="horizontal-card">
        {workouts?.map((workout)=>(
            <WorkoutItem key={workout._id} workout={workout}/>
        ))}
    </div>
    )
}
export default Workouts