import { NavLink } from "react-router-dom"
import '../assets/css/utils/base.css'
import '../assets/css/navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return <div className="navbar">
        <div className="nav-logo">
            <img src={logo} width="70" height="auto" />
            <span>FitTracker</span>
        </div>
        <NavLink className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"} to='/about'>About</NavLink>
        <button>Logout</button>
    </div >
}
export default Navbar