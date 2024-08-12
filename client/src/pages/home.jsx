import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col, Card, Button, Modal, Image } from 'react-bootstrap';
import sec4Img1 from '../assets/sec4Img1.png';
import './home.css'
import sec4Img2 from '../assets/sec4Img2.png';
import sec4Img3 from '../assets/sec4Img3.png';
import sec4Img4 from '../assets/sec4Img4.png';
import sec5Img1 from '../assets/sec5Img1.png';
import sec5Img2 from '../assets/sec5Img2.png';
import sec5Img3 from '../assets/sec5Img3.png';
import sec5Img4 from '../assets/sec5Img4.png';
import sec5Img5 from '../assets/sec5Img5.png';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [show, setShow] = useState(false);
  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    // Fetch room types from API
    const fetchRoomTypes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/roomTypes');
        setRoomTypes(response.data);
      } catch (error) {
        console.error('Error fetching room types:', error);
      }
    };

    fetchRoomTypes();
  }, []);

 
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const RoomCard = ({ imgSrc, title, price }) => (
    <Card className="text-white">
      <Card.Img src={imgSrc} alt={title} />
      <Card.ImgOverlay>
        <Card.Text>From ${price}/night</Card.Text>
        <Card.Title>{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
  return (
    <div>
      <Navbar centerText="Welcome to LuxuryStay" backgroundImage="https://themewagon.github.io/montana/img/banner/banner.png"/>
      
      <div className="container-fluid py-5 mt-5">
        <div className='row py-5 mt-5'>
          <div className='col-md-6 '>
            <h2 className="display-4 px-5">A Luxuries Hotel with Nature</h2>
            <p className="lead px-5">
              Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
              consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
              sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
              Dapibus lorem feugiat facilisi faucibus et Rhoncus.

            </p>
            <a
              className="text-dark px-5">Learn More</a>
          </div>
          <div className='col-md-6'>
            <img src="src/assets/sec-img1.png" />
            <img src="src/assets/sec-img2.png" className="mt-5 mx-3" />
          </div>
        </div>
      </div>
      <Container fluid className="my-5">
        <h2 className="text-center mb-4 my-5 ">Ongoing Offers</h2>
        <Row className='my-5'>
          <Col md={4} className="mb-4 my-2 d-flex justify-content-center">
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
                <Button as={Link} to='/room' variant="primary" className=" custom-button">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 my-2 d-flex justify-content-center">
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
                <Button as={Link} to='/room' variant="primary" className="custom-button">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 my-2 d-flex justify-content-center">
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
                  <Button as={Link} to='/room' variant="primary" className="custom-button ">Book Now</Button>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="container-fluid hero-section text-center">
        <img src="https://themewagon.github.io/montana/img/banner/banner2.png" alt="Montana Sea View" className="hero-image" />
        <div className="soverlay text-center">
          <Container className="">
            <h1 className='texth1'>Relax and Enjoy your Vacation</h1>
            <p className="location-text">Montana Sea View</p>
            <div className='text-center'>
              <Button variant="primary" className="play-button" onClick={handleShow}>
                <i className="fa fa-play"></i>
              </Button>
            </div>
          </Container>
        </div>

        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Watch Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="container-fluid py-5 mt-5">
        <div className='row py-5 mt-5'>
          <div className='col-md-6 '>
            <img src="src/assets/sec3-img1.png" />
            <img src="src/assets/sec3-img2.png" className="mt-5 mx-3" />
          </div>
          <div className='col-md-6'>
            <h2 className="display-4 px-5">We Serve Fresh and
              Delicious Food</h2>
            <p className="lead px-5">
              Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
              consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
              sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
              Dapibus lorem feugiat facilisi faucibus et Rhoncus.

            </p>
            <a
              className="text-dark px-5">Learn More</a>
          </div>
        </div>
      </div>

      <Container fluid>
        <Row>
        {roomTypes.map((room) => (
            <Col key={room._id} md={6} className="p-0 sec4">
              <RoomCard imgSrc={room.image} title={room.name} price={room.price || '250'} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="reservation-section mt-5 overflow-hidden">
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

export default Home;
