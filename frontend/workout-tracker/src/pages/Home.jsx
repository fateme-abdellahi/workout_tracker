import Workout from "../components/Workout"
import '../assets/css/home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const addWorkoutHandler = () => {
        navigate('/workouts/add/')
    }

    return <>
        <div className="workouts">
            <button onClick={addWorkoutHandler} className="workout-add-button">+</button>
            <h1 className="workouts-title">Your Workouts</h1>
            <Workout name="workout-1" status="active" date="10-01-2025" comment="workout comment" key="1" id="1" />
            <Workout name="workout-2" status="active" date="11-01-2025" comment="workout comment" key="2" id="2" />
            <Workout name="workout-3" status="pending" date="12-01-2025" comment="workout comment" key="3" id="3" />
            <Workout name="workout-4" status="active" date="13-01-2025" comment="workout comment" key="4" id="4" />
        </div>
        <div className="workouts-load-more">load more workouts</div>
    </>
}
export default Home