import { NavLink, useNavigate } from "react-router-dom"
import styles from '../assets/css/Navbar.module.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        navigate("/login")
    }

    return <div className={styles.navbar}>
        <div className={styles.navLogo}>
            <img src={logo} width="70" height="auto" />
            <span>FitTracker</span>
        </div>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : `${styles.navLink}`} to='/about'>About</NavLink>
        <button onClick={logoutHandler}>Logout</button>
    </div >
}
export default Navbar