import styles from '../assets/css/AddWorkout.module.css'
import { FaTimes } from 'react-icons/fa'
import { Field, ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { requestToApi } from '../assets/js/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const EditWorkoutPage = () => {
    const { id } = useParams()

    const workouts = useSelector(state => state.userWorkouts)

    const workout = workouts.find(workout => workout.id == id)

    const [exercises, setExercises] = useState(workout?.exercises || [])

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const submitHandler = async (values) => {

        if (!exercises.length) {
            setError("Please add at least one exercise")
            return
        }
        const exercisesTemp = []
        exercises.forEach(exercise => {
            const e = { ...exercise }
            delete e.id
            exercisesTemp.push(e)
        })
        let date = null
        if (values.datetime) {
            date = new Date(values.datetime).toISOString()
        }
        const data = {
            name: values.workoutName,
            comment: values.comments,
            date: date,
            status: values.status,
            exercises: exercisesTemp
        }

        const res = await requestToApi(`/edit/${id}/`, 'put', data)

        if (res.status === 200) {
            toast.success('workout edited successfully.')
            navigate("/")
        } else if (res.status === 400) {
            if (res.data.name) {
                if (res.data.name === "This field is required.") {
                    setError("Name is required")
                } else {
                    setError(res.data.name[0])

                }
            } else {
                setError("please enter data correctly.")
            }
        }
        else {
            toast.error("something went wrong.")
        }
    }

    const valiadationSchema = yup.object({
        workoutName: yup.string().required("this field is required"),
    })

    const addExerciseHandler = (values, setFieldValue) => {
        if (!values.exerciseName || !values.exerciseCategory || !values.exerciseDescription || !values.exerciseRepetitions || !values.exerciseSets) {
            setError("Please fill exercise fields correctly.")
            return
        }
        setExercises([...exercises, {
            id: Date.now(),
            exercise_name: values.exerciseName,
            category: values.exerciseCategory,
            description: values.exerciseDescription,
            repetitions: values.exerciseRepetitions,
            sets: values.exerciseSets,
            weights: values.exerciseWeights
        }])
        setFieldValue("exerciseName", "")
        setFieldValue("exerciseCategory", "")
        setFieldValue("exerciseDescription", "")
        setFieldValue("exerciseRepetitions", "")
        setFieldValue("exerciseSets", "")
        setFieldValue("exerciseWeights", "")
        setError("")
    }
    const deleteExerciseHandler = (id) => {
        setExercises(prevExercises => prevExercises.filter(exercise => exercise.id !== id))
    }

    return <Formik initialValues={{
        status: workout?.status || '',
        datetime: workout?.date || '',
        comments: workout?.comment || '',
        workoutName: workout?.name || '',
        exerciseSets: "",
        exerciseName: "",
        exerciseCategory: "",
        exerciseWeights: "",
        exerciseRepetitions: "",
        exerciseDescription: "",
    }} validationSchema={valiadationSchema} onSubmit={submitHandler}>
        {({ values, isSubmitting, setFieldValue }) => <Form>
            <label htmlFor="workout-name">Workout Name*</label>
            <Field type="text" id="workout-name" name="workoutName" />
            <ErrorMessage component='div' name='workoutName' className='formFieldErrorMessage' />

            <label htmlFor="datetime">Date & Time</label>
            <Field type="datetime-local" id="datetime" name="datetime" />

            <label htmlFor="comments">Comment</label>
            <Field component="textarea" id="comments" name="comments"></Field>

            <label htmlFor="status">status</label>
            <Field as="select" id="status" name="status" value={values.status}>
                <option value='active'>Active</option>
                <option value='pending'>Pending</option>
            </Field>

            <fieldset className={styles.exercises}>
                <legend>Add Exercises</legend>
                {exercises.map(exercise => <div key={exercise.id} className={styles.addedExercises}>
                    <FaTimes className={styles.deleteExerciseButton} onClick={() => deleteExerciseHandler(exercise.id)} />
                    <div className={styles.addedExercisesName}>{exercise.exercise_name}</div>
                    {exercise.description ? <div className={styles.addedExercisesDescription}>{exercise.description}</div> : ""}
                    {exercise.datetime ? <div className={styles.addedExercisesDatetime}><span>▪️ </span>{exercise.datetime}</div> : ""}
                    {exercise.category ? <div className={styles.addedExercisesCategory}><span>▪️ </span>{exercise.category}</div> : ""}
                    {exercise.repetitions ? <div className={styles.addedExercisesRepitition}><span>▪️ </span>{exercise.repetitions}</div> : ""}
                    {exercise.sets ? <div className={styles.addedExercisesSet}><span>▪️ </span>{exercise.sets}</div> : ""}
                    {exercise.weights ? <div className={styles.addedExercisesWeight}><span>▪️ </span>{exercise.weights}</div> : ""}
                </div>)}
                <div className={styles.exercisesForm}>
                    <Field id="exercise-name" name="exerciseName" type='text' placeholder='exercise name*' />
                    <Field component='textarea' id='exercise-description' name='exerciseDescription' placeholder='description*'></Field>
                    <Field type="text" id="exercise-category" name="exerciseCategory" placeholder='category*' />
                    <Field type="number" id="exercise-repetitions" name="exerciseRepetitions" placeholder='repetitions*' />
                    <Field type="number" id="exercise-sets" name="exerciseSets" placeholder='sets*' />
                    <Field id='exercise-weights' name='exerciseWeights' placeholder='weights' />
                    <button onClick={() => addExerciseHandler(values, setFieldValue)} type='button'>add exercise</button>
                </div>

                {error ? <div className='formFieldErrorMessage'>{error}</div> : ''}
            </fieldset>
            <button type="submit">Add Workout</button>
        </Form>
        }
    </Formik>
}
export default EditWorkoutPage