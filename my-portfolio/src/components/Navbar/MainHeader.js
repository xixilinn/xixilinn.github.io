import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MainHeader = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/#/'>Xi Xi Lin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainHeader;