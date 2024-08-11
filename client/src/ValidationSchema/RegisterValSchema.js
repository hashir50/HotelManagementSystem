import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    contactNumber: yup.string().required('Contact Number is required'),
    address: yup.string().optional(), // Make optional if not required
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    repeatPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Please re-enter your password'),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});
