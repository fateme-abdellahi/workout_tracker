import { configureStore } from '@reduxjs/toolkit';
import userWorkoutsReducer from './Slices'

export const store = configureStore({
    reducer: {
        'userWorkouts': userWorkoutsReducer,
    },
});