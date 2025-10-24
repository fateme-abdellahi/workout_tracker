import '../assets/css/add-workout.css'
import { FaTimes } from 'react-icons/fa'
const EditWorkoutPage = ({ workoutId, workoutName, workoutDatetime, workoutComment, workoutStatus, exercises }) => {
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

            <fieldset className='exercises'>
                <legend>Edit Exercises</legend>
                <div className='added-exercises'>
                    <FaTimes className='delete-exercise-button' />
                    <div className='added-exercises-name'>name</div>
                    <div className='added-exercises-description'>description</div>
                    <div className='added-exercises-datetime'><span>| </span>datetime</div>
                    <div className='added-exercises-category'><span>| </span>category</div>
                    <div className='added-exercises-repitition'><span>| </span>repetition</div>
                    <div className='added-exercises-set'><span>| </span>set</div>
                    <div className='added-exercises-weight'><span>| </span>weight</div>
                </div>

                <div className='added-exercises'>
                    <FaTimes className='delete-exercise-button' />
                    <div className='added-exercises-name'>name</div>
                    <div className='added-exercises-description'>description</div>
                    <div className='added-exercises-datetime'><span>| </span>datetime</div>
                    <div className='added-exercises-category'><span>| </span>category</div>
                    <div className='added-exercises-repitition'><span>| </span>repetition</div>
                    <div className='added-exercises-set'><span>| </span>set</div>
                    <div className='added-exercises-weight'><span>| </span>weight</div>
                </div>

                <div className='added-exercises'>
                    <FaTimes className='delete-exercise-button' />
                    <div className='added-exercises-name'>name</div>
                    <div className='added-exercises-description'>description</div>
                    <div className='added-exercises-datetime'><span>| </span>datetime</div>
                    <div className='added-exercises-category'><span>| </span>category</div>
                    <div className='added-exercises-repitition'><span>| </span>repetition</div>
                    <div className='added-exercises-set'><span>| </span>set</div>
                    <div className='added-exercises-weight'><span>| </span>weight</div>
                </div>
                <div className='exercises-form'>
                    <input id="exercise-name" type='text' placeholder='exercise name' />
                    <textarea id='exercise-description' placeholder='description'></textarea>
                    <input type="text" id="exercise-category" placeholder='category' />
                    <input type="number" id="exercise-repetitions" placeholder='repetitions' />
                    <input type="number" id="exercise-sets" placeholder='sets' />
                    <input id='exercise-weights' placeholder='weights' />

                    <button type='button'>add exercise</button>
                </div>
            </fieldset>
            <button type="submit">Edit Workout</button>
        </form>
    </>
}
export default EditWorkoutPage