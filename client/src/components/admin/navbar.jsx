import React, { Component } from 'react';
import { Dropdown,Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


const navbar = ()=>{
    return (
      <Navbar  sticky="top"className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Container>
    </Navbar>
    );
}

export default navbar;
