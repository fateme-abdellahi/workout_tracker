import { toast } from 'react-toastify'
import styles from '../assets/css/Workout.module.css'
import { FaTrash, FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Workout = ({ status, name, date, id }) => {

    const navigate = useNavigate()
    const deleteMessageHandler = (e) => {
        e.stopPropagation();
        const confirm = window.confirm("are you sure you want to delete this workout?")
        if (!confirm) return

        // delete task


        toast.success("Workout Deleted Successfully")
    }

    const editWorkoutHandler = (e) => {
        e.stopPropagation();
        navigate(`/workouts/${id}/edit`)
    }

    return <div onClick={() => navigate(`/workouts/${id}`)} className={`${styles.workout} ${status === 'active' ? `${styles.workoutActive}` : `${styles.workoutPending}`}`}>
        <div>

            <div className={styles.workoutName}>{name}</div>
            <div className={styles.workoutStatus}>
                <span>STATUS: </span>
                <span>{status}</span>
            </div>
            <div className={styles.workoutDate}>{date}</div>
        </div>
        <div className={styles.workoutButtons}>
            <FaPen onClick={editWorkoutHandler} className={styles.workoutEditButton} />
            <FaTrash onClick={deleteMessageHandler} className={styles.workoutDeleteButton} />
        </div>
    </div>
}
export default Workout