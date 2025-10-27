import { Field, ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import '../assets/css/utils/form.css';
import { anonymus_user_api } from '../assets/js/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        try {
            const res = await anonymus_user_api.post('/auth/signup/', values)
            if (res.status === 201) {
                const data = res.data
                localStorage.setItem("access_token", data.access)
                localStorage.setItem("refresh_token", data.refresh)
                navigate("/")
            }
        } catch (err) {
            if (err.status === 400) {
                const res = err.response?.data
                if (res.email) {
                    setError(res.email[0])
                } else if (res.password) {
                    setError(res.password[0])
                } else if (res.password2) {
                    setError(res.password2[0])
                } else if (res.username) {
                    setError(res.username[0])
                } else {
                    setError("please enter data correctly.");
                }
            } else {
                setError("something went wrong...");
            }
        }
    }

    const valiadationSchema = yup.object({
        username: yup.string().min(2, "username must be atleast 2 characters").max(20, "username can't be more than 20 characters").required("username is required"),
        password: yup.string().min(8, "password length can not be less than 8").max(100, "password is too long").required("password is required"),
        password2: yup.string().oneOf([yup.ref("password")], "passwords must match").required("this field is required"),
        email: yup.string().email("invalid email").required("email is required")

    })

    return <Formik initialValues={{
        username: "",
        password: "",
        password2: "",
        email: "",
    }} validationSchema={valiadationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (<Form>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" id="username" required />
            <ErrorMessage name='username' component='div' className='formFieldErrorMessage' />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" required />
            <ErrorMessage name='password' component='div' className='formFieldErrorMessage' />

            <label htmlFor="password2">Confirm Password</label>
            <Field type="password" id="password2" name="password2" required />
            <ErrorMessage name='password2' component='div' className='formFieldErrorMessage' />

            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" required />
            <ErrorMessage name='email' component='div' className='formFieldErrorMessage' />

            <button type='submit'>Sign up</button>

            <h3 className='alterAuthText'>Already have an account?</h3>
            <button onClick={() => navigate("/login")} className='alterAuthButton' type='button'>Sign in</button>
            {error ? <div className='formFieldErrorMessage'>{error}</div> : ""}
        </Form>)
        }
    </Formik>
}
export default RegisterPage