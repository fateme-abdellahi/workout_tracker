import Workout from "../components/Workout"
import styles from '../assets/css/Home.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { requestToApi } from "../assets/js/axios"
import { useDispatch, useSelector } from "react-redux"
import { setAll } from "../redux/Slices"

const Home = () => {
    const navigate = useNavigate()
    const workouts = useSelector(state => state.userWorkouts)
    const dispatch = useDispatch()

    useEffect(() => {

        const fetchData = async () => {
            const res = await requestToApi("/", 'get')
            if (res.status === 200) {
                return res.data
            } else if (res.status === 401) {
                navigate("/login")
            } else {
                console.error("something went wrong...")
            }
            return null
        }

        const dataFetchHandling = async () => {
            const data = await fetchData();
            if (data) {
                dispatch(setAll(data))
            }
        }

        dataFetchHandling()

    }, [])

    const addWorkoutHandler = () => {
        navigate('/workouts/add/')
    }
    return <>
        <div className={styles.workouts}>
            <button onClick={addWorkoutHandler} className={styles.workoutAddButton}>+</button>
            <h1 className={styles.workoutsTitle}>Your Workouts</h1>
            {workouts.map((workout) => <Workout exercises={workout.exercises} name={workout.name} status={workout.status} date={workout.date} comment={workout.comment} key={workout.id} id={workout.id} />
            )}
        </div>
    </>
}
export default Home