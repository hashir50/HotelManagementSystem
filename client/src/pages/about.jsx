import React from "react";
import Navbar from "../components/navbar";
import bradcam from '../assets/bradcam.png';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col, Card, Button, Modal, Image } from 'react-bootstrap';
import Footer from "../components/footer";
import sec5Img1 from '../assets/sec5Img1.png';
import sec5Img2 from '../assets/sec5Img2.png';
import sec5Img3 from '../assets/sec5Img3.png';
import sec5Img4 from '../assets/sec5Img4.png';
import sec5Img5 from '../assets/sec5Img5.png';
import './home.css'

function About() {
    return (
        <div>
            <Navbar centerText="About LuxuryStay"
                backgroundImage={bradcam} />
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
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://themewagon.github.io/montana/img/banner/about_banner.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://themewagon.github.io/montana/img/banner/banner.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://themewagon.github.io/montana/img/rooms/3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

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

            <Footer />



        </div>


    );
}

export default About