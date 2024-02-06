import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ handlePageChange }) {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand 
      href="#MainPage"
      onClick={() => handlePageChange("MainPage")}
      >
        Lindsay Allen
        </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link 
        href="#Projects" 
        onClick={() => handlePageChange("Projects")}
        >
          Projects
          </Nav.Link>

        <Nav.Link 
        href="#About"
        onClick={() => handlePageChange("About")}
        >
          About
        </Nav.Link>

        <Nav.Link 
        href="#Resume"
        onClick={() => handlePageChange("Resume")}
        >
          Resume
          </Nav.Link>

          <Nav.Link 
        href="https://github.com/katsaymeow"
        target="_blank"
        rel="noopener noreferrer"
        >
          GitHub
          </Nav.Link>
{/* Change To CONTACT FORM */}
          <Nav.Link 
        href="#Form"
        onClick={() => handlePageChange("Form")}
        >
          Contact
          </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

