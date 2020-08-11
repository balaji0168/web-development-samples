import React from 'react';
//import logo from './logo.svg';
//import {BrowserRouter as Router} from 'react-router-dom';
//import Route from 'react-router-dom/Route';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';



function App() {
  return (
    <div id="App" >
    <div className="navbar">

      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark">
        <Navbar.Brand href="#home">Ramaiah Ayurvedic Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navkeys">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#facilities">Facilities</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#footer">Contact Us</Nav.Link>
            <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Receptionist</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Staff</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Doctor</NavDropdown.Item>
</NavDropdown>

          </Nav>


        </Navbar.Collapse>
      </Navbar>
</div>
<div className="carousel">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block im w-100"
      src=""

      alt="First slide"
    />
    <Carousel.Caption>
      <h3>hello</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img w-100"
      src=""
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img w-100"
      src=""
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
</div>


<div id="events" className="events">
<h3>EVENTS</h3>
</div>


<div id ="facilities" className="facilities">
<h3>FACILITIES</h3>
</div>

<div id="footer">
<footer className="footer is-primary">
<div className="container">
<div className="columns">
<div className="column">
<p>All rights are reserver under Copyright Act</p>
  </div>
  <div className="column">
  <a className="icon" href="https://www.facebook.com/login"><i class="fa fa-facebook"></i></a>

  <a className="icon" href="https://www.twitter.com/login"><i className="fa fa-twitter" src=""></i></a>
  <a className="icon" href="www.instagram.com/login"><i className="fa fa-instagram"></i></a>
  </div>
  </div>
</div>
</footer>

</div>

</div>
  );
}

export default App;
