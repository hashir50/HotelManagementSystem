import React from "react";
import Navbar from "../components/navbar";
import luxroom from '../assets/luxroom.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col, Card, Button, Modal, Image} from 'react-bootstrap';
import './home.css';
import sec4Img1 from '../assets/sec4Img1.png';
import sec4Img2 from '../assets/sec4Img2.png';
import sec4Img3 from '../assets/sec4Img3.png';
import sec4Img4 from '../assets/sec4Img4.png';
import sec5Img1 from '../assets/sec5Img1.png';
import sec5Img2 from '../assets/sec5Img2.png';
import sec5Img3 from '../assets/sec5Img3.png';
import sec5Img4 from '../assets/sec5Img4.png';
import sec5Img5 from '../assets/sec5Img5.png';
import Footer from '../components/footer';
import AppRoutes from '../routes';
import { Link } from "react-router-dom";

function Room(){
  const RoomCard = ({ imgSrc, title, price }) => (
    <Card className="text-white">
      <Card.Img src={imgSrc} alt={title} />
      <Card.ImgOverlay>
        <Card.Text>From ${price}/night</Card.Text>
        <Card.Title>{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
return(
   <div>
    <Navbar centerText="Laxaries Rooms" 
    backgroundImage={luxroom} />

      <Container className="my-5">
        <h2 className="text-center mb-4 my-5 ">Rooms</h2>
        <Row className='my-5'>
          <Col md={4} className="mb-4 my-2">
            <Card className="offer-card">
              <Card.Img variant="top" src="src/assets/sec2-img1.png" alt="Sea view at night" />
              <Card.Body>
                <Card.Title>Up to 35% savings on Club rooms and Suites</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Luxaries condition</li>
                    <li>3 Adults & 2 Children size</li>
                    <li>Sea view side</li>
                  </ul>
                </Card.Text>
                <Link to='/check' variant="primary" className="btn custom-button">Book Now</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 my-2">
            <Card className="offer-card">
              <Card.Img variant="top" src="src/assets/sec2-img2.png" alt="Balcony with sea view" />
              <Card.Body>
                <Card.Title>Up to 35% savings on Club rooms and Suites</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Luxaries condition</li>
                    <li>3 Adults & 2 Children size</li>
                    <li>Sea view side</li>
                  </ul>
                </Card.Text>
                <Link to='/check' variant="primary" className="btn custom-button">Book Now</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 my-2">
            <Card className="offer-card">
              <Card.Img variant="top" src="src/assets/sec2-img3.png" alt="Mountain view with sea" />
              <Card.Body>
                <Card.Title>Up to 35% savings on Club rooms and Suites</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Luxaries condition</li>
                    <li>3 Adults & 2 Children size</li>
                    <li>Sea view side</li>
                  </ul>
                </Card.Text>
                <div className='text-center'>
                <Link to='/check' variant="primary" className="btn custom-button">Book Now</Link>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col md={6} className="p-0 sec4">
            <RoomCard imgSrc={sec4Img1} title="Superior Room" price="250" />
          </Col>
          <Col md={6} className="p-0 sec4">
            <RoomCard imgSrc={sec4Img2} title="Deluxe Room" price="250" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="p-0 sec4">
            <RoomCard imgSrc={sec4Img3} title="Signature Room" price="250" />
          </Col>
          <Col md={6} className="p-0 sec4">
            <RoomCard imgSrc={sec4Img4} title="Couple Room" price="250" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="reservation-section mt-5 ">
    <Row className="justify-content-center text-center mt-5">
      <Col md={8} className="reservation-query mb-5">
        <h4>For Reservation or Query?</h4>
        <Button variant="primary" size="lg" className="contact-button">
          +10 576 377 4789
        </Button>
      </Col>
    </Row>
    <Row className="image-row mt-5">
      <Col md={2} className="p-0">
        <img src={sec5Img1} alt="Image 1" className="img-fluid" />
      </Col>
      <Col md={2} className="p-0">
        <img src={sec5Img2} alt="Image 2" className="img-fluid" />
      </Col>
      <Col md={2} className="p-0">
        <img src={sec5Img3} alt="Image 3" className="img-fluid" />
      </Col>
      <Col md={2} className="p-0">
        <img src={sec5Img4} alt="Image 4" className="img-fluid" />
      </Col>
      <Col md={2} className="p-0">
        <img src={sec5Img5} alt="Image 5" className="img-fluid" />
      </Col>
      <Col md={2} className="p-0">
        <img src={sec5Img2} alt="Image 5" className="img-fluid" />
      </Col>
    </Row>
  </Container>

<Footer/>
   </div>
);
}

export default Room;