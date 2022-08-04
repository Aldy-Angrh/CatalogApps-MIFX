import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar,  Container} from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">MIFX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}

export default NavbarComponent


