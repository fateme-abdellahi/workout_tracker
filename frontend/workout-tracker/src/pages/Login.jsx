const LoginPage = () => {
    return <>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />

            <button type='submit'>Sign in</button>
        </form>
    </>
}
export default LoginPage