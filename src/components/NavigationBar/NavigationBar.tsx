import React from 'react';
import './NavigationBar.scss';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavigationBar = () => {
  return (
    <Navbar
      className="NavigationBar" 
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="NavigationBar__logo">
          </div>
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Characters</Nav.Link>
            <Nav.Link href="#">Episodes</Nav.Link>
            <Nav.Link href="#">Locations</Nav.Link>
            <Nav.Link href="#">My watch list</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
};
