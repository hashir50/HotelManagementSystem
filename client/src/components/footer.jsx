import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
function Footer() {
    return(
<Container fluid className="py-5 text-light footer mt-5 ">
    <footer className="">
      <Row className="mt-5">
        <Col md={1}></Col>
        <Col md={2}>
          <h5>Address</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Aptech SFC  Karachi </a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Get Direction</a></li>        
          </ul>
        </Col>

        <Col md={2}>
          <h5>Reservation</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">+10 367 267 2678
            reservation@montana.com</a></li>

          </ul>
        </Col>

        <Col md={2}>
          <h5>Pages</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link  to="/" className="nav-link p-0 text-light">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-light">Contact</Link></li>
            <li className="nav-item mb-2"><Link to="/room" className="nav-link p-0 text-light">Pricing</Link></li>
            <li className="nav-item mb-2"><Link  className="nav-link p-0 text-light">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-light">About</Link></li>
          </ul>
        </Col>

        <Col md={4} >
          <Form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex w-100 gap-2">
              <Form.Label htmlFor="newsletter1" className="visually-hidden">Email address</Form.Label>
              <Form.Control id="newsletter1" type="text" placeholder="Email address" />
              <Button variant="primary" type="button">Subscribe</Button>
            </div>
          </Form>
        </Col>
      </Row>

      <div className="d-flex justify-content-between py-4 my-5 border-top">
        <p className="px-5">&copy; 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </Container>
    )
}

export default Footer;