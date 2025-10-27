import { Field, ErrorMessage, Form, Formik } from 'formik'
import * as yup from 'yup'
import '../assets/css/utils/form.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { anonymus_user_api } from '../assets/js/axios'; { }

const LoginPage = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            const res = await anonymus_user_api.post('/auth/api/token/', values)
            console.log(res)
            if (res.status === 200) {
                const data = res.data
                localStorage.setItem("access_token", data.access)
                localStorage.setItem("refresh_token", data.refresh)
                navigate("/")
            }
        } catch (err) {
            console.log(err)
            if (err.status === 400) {
                setError("please enter data correctly.")
            } else if (err.status === 401) {
                setError("password is wrong or user doesn't exist.");
            } else {
                setError("something went wrong...");
            }
        }
    }

    const valiadationSchema = yup.object({
        username: yup.string().min(2, "username must be atleast 2 characters").max(20, "username can't be more than 20 characters").required("username is required"),
        password: yup.string().min(8, "password length can not be less than 8").max(100, "password is too long").required("password is required"),
    })

    return <Formik initialValues={{
        username: "",
        password: "",
    }} validationSchema={valiadationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (<Form>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" id="username" required />
            <ErrorMessage name='username' component='div' className='formFieldErrorMessage' />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" required />
            <ErrorMessage name='password' component='div' className='formFieldErrorMessage' />

            <button type='submit'>Sign in</button>
            <h3 className='alterAuthText'>Have no account?</h3>
            <button onClick={() => navigate("/register")} className='alterAuthButton' type='button'>Sign up</button>
            {error ? <div className='formFieldErrorMessage'>{error}</div> : ""}

        </Form>)
        }
    </Formik>
}
export default LoginPage