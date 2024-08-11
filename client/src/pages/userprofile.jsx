import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: '1234 Main St, Springfield, USA'
  };

  const reservation = {
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
    status: 'Confirmed', 
  };

  return (
    <Container fluid className="mt-5 d-flex justify-content-center">
      <Row>
        <Col >
          <h2>Hi Username</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>User Information</Card.Title>
              <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text><strong>Phone:</strong> {user.phone}</Card.Text>
              <Card.Text><strong>Address:</strong> {user.address}</Card.Text>
              <Link to='/update' variant="primary" className="mt-3 btn btn-primary">Update Information</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>{reservation.type} <span className="text-muted">{reservation.size}</span></Card.Title>
              <Card.Text>{reservation.description}</Card.Text>
              <ListGroup variant="flush">
                {reservation.amenities.map((amenity, index) => (
                  <ListGroup.Item key={index}>
                    {amenity}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="mt-3"><strong>Bed Type:</strong> {reservation.bedType}</Card.Text>
              <Card.Text><strong>Room Amenities:</strong> Shower, Safe, Luggage</Card.Text>
              <Card.Text><strong>Cancellation Policy:</strong> {reservation.cancellationPolicy}</Card.Text>
              <ListGroup variant="flush" className="mt-3">
                {reservation.bookingSites.map((site, index) => (
                  <ListGroup.Item key={index}>
                    {site.site}: {site.price} ({site.nights}) {site.discount && `- ${site.discount}`}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="mt-3"><strong>Status:</strong> {reservation.status}</Card.Text>
              <Card.Text className="mt-3"><small>After 26 July: Higher Prices</small></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
