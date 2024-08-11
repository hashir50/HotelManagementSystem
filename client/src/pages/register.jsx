import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../ValidationSchema/RegisterValSchema';

function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                name: data.name,
                email: data.email,
                password: data.password,
                contactNumber: data.contactNumber,
                address: data.address,
                role: data.role,
            });

           navigate('/Login')
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('An error occurred');
        }
    };

    return (
        <div className="container-fluid">
            <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-custom">
                <div className="row w-100">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 d-none d-md-block p-0">
                        <div className="bg-image"></div>
                    </div>
                    <div className="col-md-4 box d-flex align-items-center justify-content-center p-5">
                        <div className="w-100">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo} alt="Logo" className="r_logo ml-4" height={100} />
                                <h2 className="text-center text-light mb-4 mt-4">Sign Up</h2>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        {...register('name')}
                                    />
                                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                </div>
                                <div className="form-group my-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email address"
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                </div>
                                <div className="form-group my-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactNumber"
                                        placeholder="Contact Number"
                                        {...register('contactNumber')}
                                    />
                                    {errors.contactNumber && <p className="text-danger">{errors.contactNumber.message}</p>}
                                </div>
                                <div className="form-group my-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="Address"
                                        {...register('address')}
                                    />
                                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                                </div>
                                <div className="form-group my-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        {...register('password')}
                                    />
                                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                </div>
                                <div className="form-group my-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="repeatPassword"
                                        placeholder="Repeat Password"
                                        {...register('repeatPassword')}
                                    />
                                    {errors.repeatPassword && <p className="text-danger">{errors.repeatPassword.message}</p>}
                                </div>
                                <div className="form-group form-check my-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        {...register('terms')}
                                    />
                                    <label className="form-check-label" htmlFor="terms">I agree to the Terms of Use</label>
                                    {errors.terms && <p className="text-danger">{errors.terms.message}</p>}
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            </form>
                            <p className="text-center mt-3"> Already signed up?
                                <Link to="/login" className="text-light">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
