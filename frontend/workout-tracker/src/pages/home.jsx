import Workout from "../components/workout"

const Home = () => {
    return <>
        <h1>Your Wourkouts</h1>
        <Workout name="workout-1" status="active" date="10-01-2025" comment="workout comment" key="1" />
        <Workout name="workout-2" status="active" date="11-01-2025" comment="workout comment" key="1" />
        <Workout name="workout-3" status="pending" date="12-01-2025" comment="workout comment" key="1" />
        <Workout name="workout-4" status="active" date="13-01-2025" comment="workout comment" key="1" />
    </>
}
export default Home