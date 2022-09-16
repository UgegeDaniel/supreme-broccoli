import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
const WorkoutsForm = () => {
    const { dispatch } = useWorkoutsContext()
    const [newWorkout, setNewWorkout] = useState({ title: '', load: '', reps: '' })
    const [errorMsg, setErrorMsg] = useState('')
    const [emptyFeilds, setEmptyFeilds] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (emptyFeilds.length === 0) {
            const response = await fetch('http://localhost:4000/api/workouts', {
                method: 'POST',
                body: JSON.stringify(newWorkout),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
            console.log('response', response)
            if (!response.ok) {
                setErrorMsg(data.error)
                setEmptyFeilds(data.emptyFeilds)
            }
            if (response.ok) {
                setNewWorkout({ title: '', load: '', reps: '' })
                setErrorMsg('')
                setEmptyFeilds([])
                // console.log('New workout added', data)
                dispatch({ type: 'CREATE_WORKOUT', payload: data }) //fe-step-9-iii
            }
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <div className='form-control'>
                <label>Exercise Title : </label>
                <input type="text" onChange={(e) => { setNewWorkout({ ...newWorkout, title: e.target.value }) }} value={newWorkout.title} className={emptyFeilds.includes("title") ? "errorStyle" : "input-field"} />
            </div>
            <div className='form-control'>
                <label>Load (in Kg) :</label>
                <input type="number" onChange={(e) => { setNewWorkout({ ...newWorkout, load: e.target.value }) }} value={newWorkout.load} className={emptyFeilds.includes("load") ? "errorStyle" : "input-field"} />
            </div>
            <div className='form-control'>
                <label>Reps : </label>
                <input type="number" onChange={(e) => { setNewWorkout({ ...newWorkout, reps: e.target.value }) }} value={newWorkout.reps} className={emptyFeilds.includes("reps") ? "errorStyle" : "input-field"} />
            </div>
            <button type='submit'>Add Workout</button>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        </form>
    )
}
export default WorkoutsForm