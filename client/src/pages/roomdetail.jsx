import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './login.css';
import { Link } from 'react-router-dom';

const RoomDetailsPage = () => {
  const room = {
    id: 1,
    type: 'Suite',
    size: '45 m²',
    description: 'It includes 1 queen size bed, private kitchen, bathroom and some living spaces.',
    amenities: [
      'Offers light breakfast coffee or tea and rolls with jam',
      'Sea View',
      'Sunlight in the mornings',
    ],
    bedType: 'Queen Size Bed Comfy fit for 2 people',
    cancellationPolicy: 'Free Cancellation',
    bookingSites: [
      { site: 'booking.com', price: 'USD 964', nights: '3 Nights' },
      { site: 'HotelStore', price: 'USD 872', discount: 'Spa $75 discount', nights: '3 Nights' },
    ],
    image: './src/assets/about_banner.png', 
  };

  return (
    <Container fluid className="mt-5 bg-light">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={room.image} height={550} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{room.type} <span className="text-muted">{room.size}</span></Card.Title>
              <Card.Text>{room.description}</Card.Text>
              <ListGroup variant="flush">
                {room.amenities.map((amenity, index) => (
                  <ListGroup.Item key={index}>
                    {amenity}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="mt-3"><strong>Bed Type:</strong> {room.bedType}</Card.Text>
              <Card.Text><strong>Room Amenities:</strong> Shower, Safe, Luggage</Card.Text>
              <Card.Text><strong>Cancellation Policy:</strong> {room.cancellationPolicy}</Card.Text>
              <ListGroup variant="flush" className="mt-3">
                {room.bookingSites.map((site, index) => (
                  <ListGroup.Item key={index}>
                    {site.site}: {site.price} ({site.nights}) {site.discount && `- ${site.discount}`}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="mt-3"><small>After 26 July: Higher Prices</small></Card.Text>
              <Link to='/book' className="btn btn-primary mt-3">Book Now</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomDetailsPage;
