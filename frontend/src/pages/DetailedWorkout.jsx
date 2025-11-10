import { useSelector } from 'react-redux'
import styles from '../assets/css/ViewWorkout.module.css'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const DetailedWorkoutPage = () => {

    const workouts = useSelector(state => state.userWorkouts)

    const navigate = useNavigate()


    const { id } = useParams()


    const workout = workouts.find((workout) => workout.id == id)

    useEffect(() => {
        if (!workout) {
            navigate("/")
        }
    }, [])


    return <div className={styles.container}>
        <div className={styles.viewWorkoutWorkoutName}>{workout?.name}</div>
        <div className={`${styles.viewWorkoutWorkoutStatus} ${workout?.status === 'active' ? styles.viewWorkoutWorkoutStatusActive : styles.viewWorkoutWorkoutStatusPending}`}>{workout?.status}</div>
        <div className={styles.viewWorkoutWorkoutComment}>{workout?.comment}</div>
        <div className={styles.viewWorkoutWorkoutDatetime}>{workout?.date}</div>

        <table>
            <caption>exercises</caption>
            <thead>
                <tr>
                    <th>exercise name</th>
                    <th>description</th>
                    <th>category</th>
                    <th>sets</th>
                    <th>reps</th>
                    <th>weights</th>
                </tr>
            </thead>
            <tbody>
                {workout?.exercises.map((exercise) => <tr key={exercise.id}>
                    <td>{exercise.name}</td>
                    <td>{exercise.description}</td>
                    <td>{exercise.category}</td>
                    <td>{exercise.sets}</td>
                    <td>{exercise.repetitions}</td>
                    <td>{exercise.weights}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
}
export default DetailedWorkoutPage