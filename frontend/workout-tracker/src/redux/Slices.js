import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id: 0,
    date: "",
    name: "",
    status: "",
    comment: "",
    exercises: [
        {
            id: 0,
            sets: "",
            workout: "",
            weights: "",
            category: "",
            description: "",
            repetitions: "",
            exercise_name: "",
        }
    ],
}]

export const userWorkoutsSlice = createSlice({
    name: "userWorkouts",
    initialState,
    reducers: {
        setAll: (state, action) => {
            return action.payload
        },
        add: (state, action) => {
            state.push({ ...action.payload, exercises: [...action.payload.exercises] })
        },
        deleteWorkout: (state, action) => {
            return state.filter(workout => workout.id != action.payload.id)
        },
    }
})

export const { setAll, add, deleteWorkout } = userWorkoutsSlice.actions

export default userWorkoutsSlice.reducer