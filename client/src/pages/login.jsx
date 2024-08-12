import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './login.css';
import logo from '../assets/logo.png';
import { Link ,useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { saveSession, getSession, isSessionExpired } from '../utils/Session';

// Validation schema
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
});

function Login() {
    
    const navigate = useNavigate();
     useEffect(() => {
        const session = getSession();

        if (session && !isSessionExpired()) {
            // Redirect based on role
            if (session.role === 'admin') {
                navigate('/admin'); // Redirect to admin dashboard
            } else {
                navigate('/'); // Redirect to home page
            }
        }
    }, [navigate]);
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', values);
            
            console.log(response.data); // Handle success, e.g., redirect to home or store token
            saveSession(response.data.token); // Save token using session utility
            navigate('/'); 
        } catch (error) {
            if (error.response && error.response.data) {
                // Handle server errors
                setErrors({ general: error.response.data.message });
            } else {
                // Handle network errors
                setErrors({ general: 'Something went wrong. Please try again.' });
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="b_box container-fluid">
            <div className="login-container">
                <div className="row no-gutters">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center left-panel box text-light">
                        <img src={logo} alt="Logo" className="logo mb-4" />
                        <h1 className="mb-3 text-light">LOGIN</h1>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="mt-5">
                                    <div className="form-group">
                                        <Field type="text" name="email" className="form-control" placeholder="Email" />
                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                    </div>
                                    <div className="form-group mt-4">
                                        <Field type="password" name="password" className="form-control" placeholder="Password" />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </div>
                                    <div className="form-check mb-3 mt-3">
                                        <Field type="checkbox" name="remember" className="form-check-input" id="rememberPassword" />
                                        <label className="form-check-label" htmlFor="rememberPassword">Remember password</label>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-light bg-light px-5 py-2 btn-block"
                                        disabled={isSubmitting}
                                    >
                                        Login
                                    </button>
                                    <ErrorMessage name="general" component="div" className="text-danger text-center mt-3" />
                                    <p className="text-center mt-3">Create your account? 
                                        <Link to="/register" className="text-light">Sign up</Link>
                                    </p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-4 right-panel"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
