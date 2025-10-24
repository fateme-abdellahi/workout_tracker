import './App.css'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditWorkoutPage from './pages/EditWorkout'
import AddWorkoutPage from './pages/AddWorkout'
import DetailedWorkoutPage from './pages/DetailedWorkout'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/workouts/add' element={<AddWorkoutPage />} />
        <Route path='/workouts/:id/' element={<DetailedWorkoutPage />} />
        <Route path='/workouts/:id/edit' element={<EditWorkoutPage />} />
      </Route>
    </Routes>
  )
}

export default App
