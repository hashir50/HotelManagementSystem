import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Table, Button } from 'react-bootstrap';
import { MdDashboard, MdCalendarToday, MdMenu } from 'react-icons/md';
import { FaUserFriends, FaUserShield, FaBed, FaMoneyBillWave } from 'react-icons/fa';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={` col-2 bg-dark text-white p-3 ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}
      style={{ height: '100vh', width: collapsed ? 'auto' : '250px', position: 'sticky', top: 0 }}
    >
      <Button
        variant="link"
        className={`text-white position-absolute ${collapsed ? 'my-2 mx-1' : 'mt-2 me-3 end-0'}`}
        onClick={toggleSidebar}
        style={{
          fontSize: '1.5rem',
          zIndex: 1,
          position: !collapsed ? 'absolute' : 'static',
        }}
      >
        <MdMenu style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
      </Button>
      {!collapsed && (
        <div className="d-flex align-items-center mb-4">
          <img src="../../src/assets/logo.png" alt="logo" height={60} />
          <h3 className="text-center mt-3" style={{ fontSize: '1.5rem' }}>
            Luxury Stay
          </h3>
        </div>
      )}
      <ul className="nav flex-column" style={{ marginTop: collapsed ? '50px' : 'auto' }}>
        <li className="nav-item mb-3">
          <Nav.Link href="#" className="text-white d-flex align-items-center">
            <MdDashboard className="me-2" style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
            {!collapsed && <span>Dashboard</span>}
          </Nav.Link>
        </li>
        <li className="nav-item mb-3">
          <Nav.Link as={Link} to='/booking' className="text-white d-flex align-items-center">
            <MdCalendarToday className="me-2" style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
            {!collapsed && <span>Booking</span>}
          </Nav.Link>
        </li>
        <li className="nav-item mb-3">
          <Nav.Link as={Link} to='/admin/users' className="text-white d-flex align-items-center">
            <FaUserFriends className="me-2" style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
            {!collapsed && <span>Users</span>}
          </Nav.Link>
        </li>
        <li className="nav-item mb-3">
          <Nav.Link as={Link} to='/admin/roles' className="text-white d-flex align-items-center">
            <FaUserShield className="me-2" style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
            {!collapsed && <span>Roles</span>}
          </Nav.Link>
        </li>
        <li className="nav-item mb-3">
          <Nav.Link as={Link} to='/admin/roomTypes' className="text-white d-flex align-items-center">
            <FaBed className="me-2" style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
            {!collapsed && <span>Room Types</span>}
          </Nav.Link>
        </li>
        <li className="nav-item mb-3">
          <Nav.Link as={Link} to='/admin/rooms' className="text-white d-flex align-items-center">
            <FaBed className="me-2" style={{ fontSize: collapsed ? '1.5rem' : '1.8rem' }} />
            {!collapsed && <span>Rooms</span>}
          </Nav.Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
