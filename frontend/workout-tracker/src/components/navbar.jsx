import { NavLink } from "react-router-dom"
import styles from '../assets/css/Navbar.module.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return <div className={styles.navbar}>
        <div className={styles.navLogo}>
            <img src={logo} width="70" height="auto" />
            <span>FitTracker</span>
        </div>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : `${styles.navLink}`} to='/about'>About</NavLink>
        <button>Logout</button>
    </div >
}
export default Navbar