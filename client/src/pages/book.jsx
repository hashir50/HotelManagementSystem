import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import './book.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  address1: Yup.string().required('Address 1 is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  accountNo: Yup.string().required('Account No is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  checkInDate: Yup.date().required('Check-in date is required'),
  checkInTime: Yup.string().required('Check-in time is required'),
  checkOutDate: Yup.date().required('Check-out date is required'),
  checkOutTime: Yup.string().required('Check-out time is required'),
  roomPreference: Yup.string().required('Room preference is required'),
  paymentMethod: Yup.string().required('Payment method is required'),
});

const Book = () => {


  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container className='ccontainer container-fluid'>
      <div className="header">
        <img src="./src/assets/banner.png" alt="Hotel Paradise" className="header-image mb-5" height={300} />
        <h1 className="header-text">LuxuryStay Hospitality</h1>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          accountNo: '',
          phone: '',
          email: '',
          checkInDate: '',
          checkInTime: '',
          checkOutDate: '',
          checkOutTime: '',
          roomPreference: '',
          paymentMethod: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Field name="firstName" type="text" className="form-control" placeholder="Enter first name" />
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Field name="lastName" type="text" className="form-control" placeholder="Enter last name" />
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formAddress1">
              <Form.Label>Address 1</Form.Label>
              <Field name="address1" type="text" className="form-control" placeholder="1234 Main St" />
              <ErrorMessage name="address1" component="div" className="text-danger" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress2">
              <Form.Label>Address 2</Form.Label>
              <Field name="address2" type="text" className="form-control" placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Field name="city" type="text" className="form-control" />
                <ErrorMessage name="city" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Field name="state" type="text" className="form-control" />
                <ErrorMessage name="state" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group as={Col} controlId="formZip">
                <Form.Label>Account No</Form.Label>
                <Field name="accountNo" type="text" className="form-control" />
                <ErrorMessage name="accountNo" component="div" className="text-danger" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Field name="phone" type="text" className="form-control" placeholder="(123) 456-7890" />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Field name="email" type="email" className="form-control" placeholder="name@example.com" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCheckInDate">
                <Form.Label>Check-in Date</Form.Label>
                <Field name="checkInDate" type="date" className="form-control" />
                <ErrorMessage name="checkInDate" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group as={Col} controlId="formCheckInTime">
                <Form.Label>Check-in Time</Form.Label>
                <Field name="checkInTime" type="time" className="form-control" />
                <ErrorMessage name="checkInTime" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group as={Col} controlId="formCheckOutDate">
                <Form.Label>Check-out Date</Form.Label>
                <Field name="checkOutDate" type="date" className="form-control" />
                <ErrorMessage name="checkOutDate" component="div" className="text-danger" />
              </Form.Group>
              <Form.Group as={Col} controlId="formCheckOutTime">
                <Form.Label>Check-out Time</Form.Label>
                <Field name="checkOutTime" type="time" className="form-control" />
                <ErrorMessage name="checkOutTime" component="div" className="text-danger" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3 mt-4" controlId="formRoomPreference">
              <Form.Label>Room Preference</Form.Label>
              <div>
                <Field type="radio" name="roomPreference" value="Standard" className="form-check-input" />
                <label className="form-check-label">Standard</label>
                <Field type="radio" name="roomPreference" value="Deluxe" className="form-check-input" />
                <label className="form-check-label">Deluxe</label>
                <Field type="radio" name="roomPreference" value="Suite" className="form-check-input" />
                <label className="form-check-label">Suite</label>
              </div>
              <ErrorMessage name="roomPreference" component="div" className="text-danger" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <div>
                <Field type="radio" name="paymentMethod" value="Bank Account" className="form-check-input" />
                <label className="form-check-label">Bank Account</label>
                <Field type="radio" name="paymentMethod" value="Paypal" className="form-check-input" />
                <label className="form-check-label">Paypal</label>
                <Field type="radio" name="paymentMethod" value="Visa" className="form-check-input" />
                <label className="form-check-label">Visa</label>
              </div>
              <ErrorMessage name="paymentMethod" component="div" className="text-danger" />
            </Form.Group>
            <Button type="submit" as={Link} to='/' className='btn btn-primary mb-5 mt-3'>
              Confirm
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Book;
