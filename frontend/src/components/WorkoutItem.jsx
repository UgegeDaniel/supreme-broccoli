import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutItem = ({ workout }) => {
    const {dispatch} = useWorkoutsContext();
    const handleDelete = async () => {
        const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
            method: "DELETE",
        })
        const data = await response.json()
        if(response.ok){
            dispatch({type: "DELETE_WORKOUT", payload: data})
        }
    }
    return (
        <div className="workout-item">
            <h4 className="workout-title">{workout?.title}</h4>
            <p><strong>Load (kg)</strong> : {workout?.load}</p>
            <p><strong>Reps</strong> : {workout?.reps}</p>
            <p>{formatDistanceToNow(new Date(workout?.createdAt), {addSuffix: true})}</p>
            <button className="material-symbols-outlined" onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default WorkoutItem