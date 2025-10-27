import Workout from "../components/Workout"
import styles from '../assets/css/Home.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import { requestToApi } from "../assets/js/axios"
import { useDispatch, useSelector } from "react-redux"
import { deleteWorkout, setAll } from "../redux/Slices"
import { toast } from "react-toastify"

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
                toast.error("something went wrong.")
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

    const deleteWorkoutHandler = (id) => {
        dispatch(deleteWorkout({ id, }))
    }

    return <>
        <div className={styles.workouts}>
            <button onClick={addWorkoutHandler} className={styles.workoutAddButton}>+</button>
            {workouts.length > 0 ? <h1 className={styles.workoutsTitle}>Your Workouts</h1> : <div className={styles.emptyWorkout}>You don't have any workouts yet.</div>}
            {workouts.map((workout) => <Workout deleteWorkoutHandler={deleteWorkoutHandler} exercises={workout.exercises} name={workout.name} status={workout.status} date={workout.date} comment={workout.comment} key={workout.id} id={workout.id} />
            )}
        </div>
    </>
}
export default Home