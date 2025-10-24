import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MainLayout from './layouts/mainLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' />
      </Route>
    </Routes>
  )
}

export default App
