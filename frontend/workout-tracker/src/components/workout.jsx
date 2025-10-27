import { toast } from 'react-toastify'
import styles from '../assets/css/Workout.module.css'
import { FaTrash, FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { requestToApi } from '../assets/js/axios'

const Workout = ({ status, name, date, id, deleteWorkoutHandler }) => {

    const navigate = useNavigate()
    const deleteMessageHandler = async (e) => {
        e.stopPropagation();
        const confirm = window.confirm("are you sure you want to delete this workout?")
        if (!confirm) return

        const res = await requestToApi(`/delete/${id}/`, 'delete')
        if (res.status === 204) {
            toast.success("Workout Deleted Successfully")
            deleteWorkoutHandler(id)

        } else if (res.status === 401) {
            navigate("/login")
        } else if (res.status === 404) {
            toast.error("workout doesn't exist")
        }
        else {
            toast.error("something went wrong...")
        }

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