import React, { Component } from "react";
import { FaFacebook, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import BrandLogo from "../assets/images/logo.svg";
import Holder1 from "../assets/images/Holder1.jpg";
import Holder2 from "../assets/images/Holder2.jpg";
import Holder3 from "../assets/images/Holder3.jpg";
import Contact from "../assets/images/contact.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

class HomeView extends Component {
  render() {
    return (
      <div id='body'>
        <div class="navigation">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            fixed="top"
          >
            <Navbar.Brand href="#home">
              <img
                src={BrandLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about">O nas</Nav.Link>
                <Nav.Link href="#services">Usługi</Nav.Link>
                <Nav.Link href="#contact">Kontakt</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <FaFacebook />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div class="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Holder1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Holder2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Holder3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div class="header"></div>
        <div class="main">
          <div id="about">
            <Container fluid>
              <Row>
                <Col>
                  <p id='aboutFirst'>
                    Centrum Księgowe ZYSK, prowadzi swoją działalność na
                    podstawie wydanego przez Ministerstwo Finansów Świadectwa
                    Kwalifikacyjnego do usługowego prowadzenia ksiąg
                    rachunkowychr 25357/01.
                  </p>
                </Col>
              </Row>
              <Row>             
                <div id='breakeLine'><hr/></div>
              </Row>
              <Row>
                <Col>
                  <p id='aboutSecond'>
                    Nasze biuro rachunkowe chce dla swoich klientów być
                    partnerem na najwyższym poziomie, a nie biurem rachunkowym
                    do wprowadzania dokumentów księgowych. Staramy się być dla
                    naszych klientów kimś, komu warto powierzyć swoje finanse.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <Row>
              <div id='breakeLine'><hr /></div>
            </Row>
          </Container>
          <div id="services">
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <Row>
              <div id='breakeLine'><hr /></div>
            </Row>
          </Container>
          <div id="contact">
            <Container>
              <Row>
                <Col md={8}>
                  <Image
                    src={Contact}
                    alt="Contact"
                    className="d-block w-100"
                    roundedCircle
                  />
                </Col>
                <Col md={4} id="contactRight">
                  <p id="contactRightFistLine">SKONTAKTUJ SIĘ Z NAMI</p>
                  <p id="contactRightSecondLine">Biuro rachunkowe BILANS</p>
                  <div>
                    <p>
                      <FaPhoneSquareAlt id="contactIcon"/>
                      +48 123 456 789
                    </p>
                    <p>
                      <FaEnvelope id="contactIcon"/> Email@mail.pl
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <Row>
            <div id='breakeLine'><hr /></div>
          </Row>
        </Container>
        <div id='footer' >
          <Container >
            <Row>
              <Col xs={{ order: "last" }}>1</Col>
              <Col xs>2</Col>
              <Col xs={{ order: "first" }}>3</Col>
            </Row>
            <Container fluid="md">
              <Row>
                <Col>
                  <p id='copyright' styles={styles.BoxShadow}>&copy; 2020 Biuro BILANS</p>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

const styles = {
  BoxShadow: {
    boxShadow: "10px 5px 5px black",
}
}

export default HomeView;
