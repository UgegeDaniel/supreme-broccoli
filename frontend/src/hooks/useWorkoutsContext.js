//fe-step-8-i
import { WorkoutContext } from "../context/workoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)
    if(!context){
      throw new Error("WorkoutContext must be used in WorkoutContextProvider")
    }
    return context
}
//fe-step-9 --- go to components and consume context