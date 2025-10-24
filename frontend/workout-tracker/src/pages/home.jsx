import Workout from "../components/workout"
import '../assets/css/home.css'

const Home = () => {
    return <>
        <div className="workouts">
            <button className="workout-add-button">+</button>
            <h1 className="workouts-title">Your Workouts</h1>
            <Workout name="workout-1" status="active" date="10-01-2025" comment="workout comment" key="1" />
            <Workout name="workout-2" status="active" date="11-01-2025" comment="workout comment" key="1" />
            <Workout name="workout-3" status="pending" date="12-01-2025" comment="workout comment" key="1" />
            <Workout name="workout-4" status="active" date="13-01-2025" comment="workout comment" key="1" />
        </div>
        <div className="workouts-load-more">load more workouts</div>
    </>
}
export default Home