import { createContext, useReducer } from 'react' //fe-step-7-ii
export const WorkoutContext = createContext() //fe-step-7-iii

//fe-step-7-v setup reducer function
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                ...state,
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                ...state,
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                ...state,
                workouts: state.workouts.filter(workout=>workout._id !== action.payload._id)
            }
        default:
            return state
    }
}
//fe-step-7-iv create context provider and wrap app component with it
export const WorkoutContextProvider = ({ children }) => {
    //fe-step-7-v setup useReducer with different dispatch, types and payloads
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: []
    })
    return (
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )
}