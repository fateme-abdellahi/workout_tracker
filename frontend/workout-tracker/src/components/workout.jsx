import '../assets/css/workout.css'
import { FaTrash, FaPen } from 'react-icons/fa'

const Workout = ({ status, name, comment, date }) => {
    return <div className={`workout ${status === 'active' ? 'workout-active' : 'workout-pending'}`}>
        <div className='workout-info'>

            <div className="workout-name">{name}</div>
            <div className="workout-comment">{comment}</div>
            <div className="workout-status">
                <span>STATUS: </span>
                <span>{status}</span>
            </div>
            <div className="workout-date">{date}</div>
        </div>
        <div className='workout-buttons'>
            <FaPen className='workout-edit-button' />
            <FaTrash className='workout-delete-button' />
        </div>
    </div>
}
export default Workout