import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ currentPage, handlePageChange }) {
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

          <Nav.Link 
        href="https://www.meetup.com/members/363994489/"
        target="_blank"
        rel="noopener noreferrer"
        >
          MeetUp
          </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

