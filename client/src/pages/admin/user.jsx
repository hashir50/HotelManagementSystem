import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { Breadcrumb, Container, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Yup validation schema with password validation
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    contactNumber: yup.string().required('Contact Number is required')
        .matches(/^0\d{10}$/, 'Contact Number must be 11 digits long and start with 0'),
    address: yup.string().required('Address is required'),
    role: yup.string().required('Role is required'),
    isActive: yup.boolean()
});

const User = () => {
    const [data, setData] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        context: { isEditMode }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await axios.get('http://localhost:3000/api/users');
                setData(usersResponse.data);
                const rolesResponse = await axios.get('http://localhost:3000/api/roles');
                setRoles(rolesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to load data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleShowModal = (user = {}) => {
        setIsEditMode(!!user._id);
        setCurrentUser(user);
        setValue('name', user.name || '');
        setValue('email', user.email || '');
        setValue('contactNumber', user.contactNumber || '');
        setValue('address', user.address || '');
        setValue('role', user.role?._id || '');
        setValue('isActive', user.isActive || false);
        setValue('password', ''); // Clear password field on open
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        reset();
        setCurrentUser(null);
    };

    const onSubmit = async (formData) => {
        try {
            console.table(formData);
            if (isEditMode) {
                await axios.put(`http://localhost:3000/api/users/${currentUser._id}`, formData);
            } else {
                await axios.post('http://localhost:3000/api/users', formData);
            }
            const response = await axios.get('http://localhost:3000/api/users');
            setData(response.data);
            handleCloseModal();
            toast.success(isEditMode ? 'User updated successfully!' : 'User added successfully!');
        } catch (error) {
            console.log('Error saving user:', error);
            if (error.response) {
                const { status, data } = error.response;
                if (status === 400 && Array.isArray(data.errors)) {
                    // Handle multiple validation errors
                    data.errors.forEach(errorItem => {
                        toast.error(errorItem.msg || 'Validation error occurred.');
                    });
                } else if (data.error === 'Email already exists') {
                    toast.error('The email address is already in use.');
                } else {
                    toast.error(data.error || 'An error occurred while saving the user.');
                }
            } else {
                toast.error('An error occurred while saving the user.');
            }
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:3000/api/users/${userId}`);
            const response = await axios.get('http://localhost:3000/api/users');
            setData(response.data);
            toast.success('User deleted successfully!');
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user. Please try again later.');
        }
    };

    const dataWithSerialNumbers = data.map((item, index) => ({
        ...item,
        sno: index + 1
    }));

    return (
        <Container className="my-4 rounded bg-white p-5 shadow-lg">
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/admin' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Users</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-4">User Management</h1>

            <Button variant="primary" onClick={() => handleShowModal()}>
                Add New User
            </Button>

            <div className="data-grid-container" style={{ height: '600px', marginTop: '20px' }}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <DataGrid
                        dataSource={dataWithSerialNumbers}
                        showBorders={true}
                        columnAutoWidth={true}
                        hoverStateEnabled={true}
                        filterRow={{ visible: true }}
                        paging={{ pageSize: 10 }}
                        scrolling={{ mode: 'virtual' }}
                    >
                        <Column dataField="sno" caption="SNo" width={50} alignment='center' />
                        <Column dataField="name" caption="Name" />
                        <Column dataField="role.name" caption="Role" />
                        <Column dataField="email" caption="Email" />
                        <Column dataField="contactNumber" caption="Contact Number" />
                        <Column dataField="address" caption="Address" />
                        <Column dataField="isActive" caption="Active" dataType="boolean" />

                        <Column
                            caption="Actions"
                            width={120}
                            alignment='center'
                            cellRender={({ data }) => (
                                <div className="action-buttons">
                                    <button
                                        className="btn btn-link"
                                        onClick={() => handleShowModal(data)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="btn btn-link text-danger"
                                        onClick={() => handleDeleteUser(data._id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            )}
                        />

                        <Editing
                            mode="popup"
                            allowUpdating={false}
                            allowDeleting={false}
                            allowAdding={false}
                        />
                    </DataGrid>
                )}
            </div>

            {/* Bootstrap Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditMode ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                {...register('name')}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register('email')}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formContactNumber" className="mb-3">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter contact number"
                                {...register('contactNumber')}
                                isInvalid={!!errors.contactNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.contactNumber?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                {...register('password')}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formAddress" className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                {...register('address')}
                            />
                        </Form.Group>

                        <Form.Group controlId="formIsActive" className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Active"
                                {...register('isActive')}
                            />
                        </Form.Group>

                        <Form.Group controlId="formRole" className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                as="select"
                                {...register('role')}
                                isInvalid={!!errors.role}
                            >
                                <option value="">Select a role</option>
                                {roles.map((role) => (
                                    <option key={role._id} value={role._id}>
                                        {role.name}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.role?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary">
                            {isEditMode ? 'Save Changes' : 'Add User'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Toast Container */}
            <ToastContainer />
        </Container>
    );
};

export default User;
