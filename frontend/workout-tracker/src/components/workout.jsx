import { toast } from 'react-toastify'
import '../assets/css/workout.css'
import { FaTrash, FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Workout = ({ status, name, comment, date, id }) => {

    const navigate = useNavigate()
    const deleteMessageHandler = () => {
        const confirm = window.confirm("are you sure you want to delete this workout?")
        if (!confirm) return

        // delete task


        toast.success("Workout Deleted Successfully")
    }

    const editWorkoutHandler = (e) => {
        console.log(e)
        navigate(`/workouts/${id}/edit`)
    }

    return <div onClick={() => navigate(`/workouts/${id}`)} className={`workout ${status === 'active' ? 'workout-active' : 'workout-pending'}`}>
        <div className='workout-info'>

            <div className="workout-name">{name}</div>
            <div className="workout-status">
                <span>STATUS: </span>
                <span>{status}</span>
            </div>
            <div className="workout-date">{date}</div>
        </div>
        <div className='workout-buttons'>
            <FaPen onClick={editWorkoutHandler} className='workout-edit-button' />
            <FaTrash onClick={deleteMessageHandler} className='workout-delete-button' />
        </div>
    </div>
}
export default Workout