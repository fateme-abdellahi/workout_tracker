import './App.css'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' />
        <Route path='/workouts/add' element={<AddWorkout />} />
      </Route>
    </Routes>
  )
}

export default App
