import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import './check.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const CheckAvailabilityForm = () => {
  const validationSchema = Yup.object().shape({
    checkInDate: Yup.date().required('Check-in date is required'),
    checkOutDate: Yup.date().required('Check-out date is required'),
    adults: Yup.number().required('Number of adults is required'),
    children: Yup.number().required('Number of children is required'),
    roomType: Yup.string().required('Room type is required'),
  });
  
  return (
    <div className="container-fluid centered-container text-align-center">
      <div className="containerr text-align-center mt-5 text-light">
        <h2 className="text-center mb-4 text-light my-5">Check Availability</h2>
        <Formik
          initialValues={{
            checkInDate: '',
            checkOutDate: '',
            adults: '',
            children: '',
            roomType: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
  
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="my-3" as={Row} controlId="formCheckInDate">
                <div className="col-md-2"></div>
                <Form.Label column sm={3}>Check in date</Form.Label>
                <Col sm={5}>
                  <Field name="checkInDate" type="date" className="form-control" placeholder="Check in date" />
                  <ErrorMessage name="checkInDate" component="div" className="text-danger" />
                </Col>
              </Form.Group>

              <Form.Group className="my-3" as={Row} controlId="formCheckOutDate">
                <div className="col-md-2"></div>
                <Form.Label column sm={3}>Check out date</Form.Label>
                <Col sm={5}>
                  <Field name="checkOutDate" type="date" className="form-control" placeholder="Check out date" />
                  <ErrorMessage name="checkOutDate" component="div" className="text-danger" />
                </Col>
              </Form.Group>

              <Form.Group className="my-3" as={Row} controlId="formAdults">
                <div className="col-md-2"></div>
                <Form.Label column sm={3}>Adult</Form.Label>
                <Col sm={5}>
                  <Field as="select" name="adults" className="form-control">
                    <option value="">Select</option>
                    {[...Array(5)].map((_, index) => (
                      <option key={index} value={index + 1}>{index + 1}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="adults" component="div" className="text-danger" />
                </Col>
              </Form.Group>

              <Form.Group className="my-3" as={Row} controlId="formChildren">
                <div className="col-md-2"></div>
                <Form.Label column sm={3}>Children</Form.Label>
                <Col sm={5}>
                  <Field as="select" name="children" className="form-control">
                    <option value="">Select</option>
                    {[...Array(6)].map((_, index) => (
                      <option key={index} value={index}>{index}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="children" component="div" className="text-danger" />
                </Col>
              </Form.Group>

              <Form.Group className="my-3" as={Row} controlId="formRoomType">
                <div className="col-md-2"></div>
                <Form.Label column sm={3}>Room type</Form.Label>
                <Col sm={5}>
                  <Field as="select" name="roomType" className="form-control">
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                    <option value="Family">Family</option>
                  </Field>
                  <ErrorMessage name="roomType" component="div" className="text-danger" />
                </Col>
              </Form.Group>

              <Button className="btn btnn text-light my-2" type="submit">
                <Link to='/roomdetail' className='text-light' style={{ textDecoration: 'none' }}>
                  Check Availability
                </Link>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckAvailabilityForm;
