import { Field, ErrorMessage, Form, Formik } from 'formik'
import * as yup from 'yup'
import '../assets/css/utils/form.css'

const RegisterPage = () => {

    const handleSubmit = async (values) => {
        console.log(values)
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
        </Form>)
        }
    </Formik>
}
export default RegisterPage