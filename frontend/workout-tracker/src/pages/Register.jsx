import styles from '../assets/css/register.module.css'

const RegisterPage = () => {
    return <>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />

            <label htmlFor="password2">Confirm Password</label>
            <input type="password" id="password2" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
        </form>
    </>
}
export default RegisterPage