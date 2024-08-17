import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Container, Row, Col, Card, Navbar, Nav, Table, Button } from 'react-bootstrap';
import { MdDashboard, MdCalendarToday, MdMenu } from 'react-icons/md';
import { FaUserFriends, FaBed, FaMoneyBillWave, FaConciergeBell } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <Container fluid className='my-5'>
    <Row className="g-4">
        <Col lg={4}>
            <Card className="text-white shadow-sm" style={{ backgroundColor: '#0a74da', borderRadius: '15px' }}>
                <Card.Body>
                    <Card.Title className="mb-3">Bookings</Card.Title>
                    <Card.Text className="d-flex align-items-center">
                        <FaBed className="me-3" style={{ fontSize: '2rem' }} />
                        <div>
                            <h3>1,587</h3>
                            <span className="badge bg-success">+11%</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4}>
            <Card className="text-white shadow-sm" style={{ backgroundColor: '#f0ad4e', borderRadius: '15px' }}>
                <Card.Body>
                    <Card.Title className="mb-3">Revenue</Card.Title>
                    <Card.Text className="d-flex align-items-center">
                        <FaMoneyBillWave className="me-3" style={{ fontSize: '2rem' }} />
                        <div>
                            <h3>$78,000</h3>
                            <span className="badge bg-warning">+8%</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4}>
            <Card className="text-white shadow-sm" style={{ backgroundColor: '#e83e8c', borderRadius: '15px' }}>
                <Card.Body>
                    <Card.Title className="mb-3">New Users</Card.Title>
                    <Card.Text className="d-flex align-items-center">
                        <FaUserFriends className="me-3" style={{ fontSize: '2rem' }} />
                        <div>
                            <h3>4782</h3>
                            <span className="badge bg-danger">+15%</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>

    {/* Additional sections */}
    <Row className="g-4 mt-4">
        <Col lg={12}>
            <Card className="shadow-sm" style={{ borderRadius: '15px' }}>
                <Card.Body>
                    <Card.Title>Recent Bookings</Card.Title>
                    <Table responsive="sm" className="mt-3">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Guest Name</th>
                                <th>Date</th>
                                <th>Room Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example rows */}
                            <tr>
                                <td>#10234</td>
                                <td>John Doe</td>
                                <td>12th Aug 2024</td>
                                <td>Deluxe Room</td>
                                <td><span className="badge bg-success">Confirmed</span></td>
                            </tr>
                            <tr>
                                <td>#10235</td>
                                <td>Jane Smith</td>
                                <td>13th Aug 2024</td>
                                <td>Suite</td>
                                <td><span className="badge bg-warning">Pending</span></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
  );
};

export default AdminDashboard;
