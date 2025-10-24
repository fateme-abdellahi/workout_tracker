import styles from '../assets/css/add-workout.module.css'
import { FaTimes } from 'react-icons/fa'

const AddWorkoutPage = () => {
    return <>
        <form>
            <label htmlFor="workout-name">Workout Name</label>
            <input type="text" id="workout-name" required />
            <label htmlFor="datetime">Date & Time</label>
            <input type="datetime-local" id="datetime" required />

            <label htmlFor="comments">Comment (Optional)</label>
            <textarea id="comments"></textarea>
            <label htmlFor="status">status</label>
            <select id="status">
                <option>Active</option>
                <option>Pending</option>
            </select>

            <fieldset className={styles.exercises}>
                <legend>Add Exercises</legend>
                <div className={styles.addedExercises}>
                    <FaTimes className={styles.deleteExerciseButton} />
                    <div className={styles.addedExercisesName}>name</div>
                    <div className={styles.addedExercisesDescription}>description</div>
                    <div className={styles.addedExercisesDatetime}><span>| </span>datetime</div>
                    <div className={styles.addedExercisesCategory}><span>| </span>category</div>
                    <div className={styles.addedExercisesRepitition}><span>| </span>repetition</div>
                    <div className={styles.addedExercisesSet}><span>| </span>set</div>
                    <div className={styles.addedExercisesWeight}><span>| </span>weight</div>
                </div>
                <div className={styles.exercisesForm}>
                    <input id="exercise-name" type='text' placeholder='exercise name' />
                    <textarea id='exercise-description' placeholder='description'></textarea>
                    <input type="text" id="exercise-category" placeholder='category' />
                    <input type="number" id="exercise-repetitions" placeholder='repetitions' />
                    <input type="number" id="exercise-sets" placeholder='sets' />
                    <input id='exercise-weights' placeholder='weights' />

                    <button type='button'>add exercise</button>
                </div>
            </fieldset>
            <button type="submit">Add Workout</button>
        </form>
    </>
}
export default AddWorkoutPage