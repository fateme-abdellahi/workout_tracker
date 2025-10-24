import '../assets/css/view-workout.css'
const DetailedWorkoutPage = ({ workoutId, workoutName, workoutDatetime, workoutComment, workoutStatus, exercises }) => {
    return <div className='container'>
        <div className='view-workout-workout-name'>workout name1</div>
        <div className={`view-workout-workout-status ${workoutStatus === 'active' ? 'view-workout-workout-status-active' : 'view-workout-workout-status-pending'}`}>pending</div>
        <div className='view-workout-workout-comment'>comment1</div>
        <div className='view-workout-workout-datetime'>01/01/2025 10:10</div>

        <table>
            <caption>exercises</caption>
            <thead>
                <tr>
                    <th>exercise name</th>
                    <th>description</th>
                    <th>category</th>
                    <th>sets</th>
                    <th>reps</th>
                    <th>weights</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>name1</td>
                    <td>description1</td>
                    <td>category1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>10 kg</td>
                </tr>
                <tr>
                    <td>name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2 name2name2 name2 name2 name2</td>
                    <td>description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2 description2</td>
                    <td>category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2 category2</td>
                    <td>2</td>
                    <td>3</td>
                    <td>10 kg 10 kg 10 kg 10 kg 10 kg 10 kg 10 kg 10 kg 10 kg 10 kg10 kg 10 kg 10 kg 10 kg 10 kg 10 kg 10 kg  10 kg 10 kg 10 kg 10 kg10 kg 10 kg 10 kg 10 kg 10 kg 10 kg 10 kg </td>
                </tr>
                <tr>
                    <td>name3</td>
                    <td>description3</td>
                    <td>category3</td>
                    <td>2</td>
                    <td>3</td>
                    <td>10 kg</td>
                </tr>
                <tr>
                    <td>name4</td>
                    <td>description4</td>
                    <td>category4</td>
                    <td>2</td>
                    <td>3</td>
                    <td>10 kg</td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default DetailedWorkoutPage