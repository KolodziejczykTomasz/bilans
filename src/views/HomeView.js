import React, { useEffect } from "react";
import Aos from "aos";

import {
  FaFacebook,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaCheck,
} from "react-icons/fa";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import ScrollComponent from "../components/ScrollComponent";
import Brand from "../assets/images/brand.jpg";

import "./index.css";
import "aos/dist/aos.css"; 

const HomeView =() =>{
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return (
      <div class="body" id="home">
        <div class="navigation">
          <Navbar
            class="navbar"
            collapseOnSelect
            expand="lg"
            bg="white"
            variant="white"
            fixed="top"
            style={{ borderBottom: "4px solid #265D8C" }}
          >
            <Navbar.Brand href="#home">
              <img
                src={Brand}
                width="150"
                height="auto"
                className="d-inline-block align-top"
                alt="Biuro Rachunkowe - logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="mr-auto justify-content-center"
                style={{
                  width: "80vw",
                  marginTop: 20,
                  marginBottom: 20,
                  textTransform: "uppercase",
                }}
              >
                <Nav.Link id="navLink" href="#about">
                  O nas
                </Nav.Link>
                <Nav.Link id="navLink" href="#services">
                  Usługi
                </Nav.Link>
                <Nav.Link id="navLink" href="#contact">
                  Kontakt
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="https://www.facebook.com/Biuro.Rachunkowe.Bilans.Robert.Gnat">
                  <FaFacebook class="NaviIcon" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div class="jumbotron">
          <div class="jumboHeroTextWrapper">
            <div class="jumboHeroTextWrapperTextHero">
              <h1 class="jumboHeroTextWrapperTextHeroH1">Biuro Rachunkowe</h1>
            </div>
            <div class="jumboHeroTextWrapperTitle">
              <p class="jumboHeroTextWrapperTitleLine">
                Profesjonalne usługi księgowe
              </p>
            </div>
            <div class="jumboHeroTextWrapperSubtitle">
              <p class="jumboHeroTextWrapperSubtitleLine">Lidzbark Warmiński</p>
            </div>
          </div>
        </div>
        <div id="about" data-aos="fade-up">
          <div id="wrapperBreakeLine">
            <div id="wrapperItemLeft">
              <div id="breakeLine">
                <hr />
              </div>
            </div>
            <div id="wrapperItemCentral">
              <div id="wrapperText">O nas</div>
            </div>
            <div id="wrapperItemRight">
              <div id="breakeLine">
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="bg-white rounded about">
            <Container fluid data-aos="fade-up">
              <Row>
                <Col>
                  <p id="aboutFirst">
                    Biuro Rachunkowe Bilans, prowadzi swoją działalność na
                    podstawie wydanego przez Ministerstwo Finansów Świadectwa
                    Kwalifikacyjnego do usługowego prowadzenia ksiąg
                    rachunkowychr 25357/01.
                  </p>
                </Col>
              </Row>
              <Row>
                <Container>
                  <Row>
                    <div id="breakeLine">
                      <hr />
                    </div>
                  </Row>
                </Container>
              </Row>
              <Row>
                <Col>
                  <p id="aboutSecond">
                    Nasze biuro rachunkowe chce dla swoich klientów być
                    partnerem na najwyższym poziomie, a nie biurem rachunkowym
                    do wprowadzania dokumentów księgowych. Staramy się być dla
                    naszych klientów kimś, komu warto powierzyć swoje finanse.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="services" data-aos="fade-up">
            <div id="wrapperBreakeLine">
              <div id="wrapperItemLeft">
                <div id="breakeLine">
                  <hr />
                </div>
              </div>
              <div id="wrapperItemCentral">
                <div id="wrapperText">Oferta</div>
              </div>
              <div id="wrapperItemRight">
                <div id="breakeLine">
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded services">
            <Container data-aos="fade-up">
              <Row>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">WSPÓŁPRACA</span>
                  </p>
                  Biuro Rachunkowe Bilans prowadzi ścisłą współpracę ze
                  specjalistami bezpośrednio związanymi z prowadzeniem
                  działalności gospodarczej, którzy również mogą przez nasze
                  Centrum służyć pomocą w sprawach związanych z zakresu BHP,
                  obsługi prawnej oraz wszelkiego rodzaju ubezpieczeń.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">
                      Z NAMI BEZPIECZNIE I PROFESJONALNIE
                    </span>
                  </p>
                  Jesteśmy nie tylko biurem rachunkowym, ale przede wszystkim
                  partnerem biznesowym, któremu mogą Państwo zaufać i z całą
                  pewnością powierzyć obsługę księgową swojej firmy. Każdy nasz
                  klient jest traktowany indywidualnie, a wszelkie jego problemy
                  rozwiązujemy profesjonalnie i najszybciej jak tylko to
                  możliwe.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">CENTRUM KSIĘGOWE ZYSK</span>
                  </p>
                  Siedziba główna biura rachunkowego mieści się w Czarnowąsach,
                  ale proponujemy naszym klientom również dojazd po odbiór
                  dokumentów. W dogodnych dla każdego terminie pojawiamy się po
                  dokumenty, a wszystkie rozliczenia otrzymujecie Państwo w
                  formie elektronicznej.
                </Col>
              </Row>
              <Row id="servicesSecondLine">
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">RELAKS</span>
                  </p>
                  Proponujemy również chwilę relaksu dla tych, którzy chcą
                  pogłębić swoją wiedzę z zarządzania lub się nią podzielić –
                  dla wszystkich zainteresowanych blog na stronie internetowej.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">CENTRUM KSIĘGOWE ZYSK</span>
                  </p>
                  Siedziba główna biura rachunkowego mieści się w Czarnowąsach,
                  ale proponujemy naszym klientom również dojazd po odbiór
                  dokumentów. W dogodnych dla każdego terminie pojawiamy się po
                  dokumenty, a wszystkie rozliczenia otrzymujecie Państwo w
                  formie elektronicznej.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">WSPÓŁPRACA</span>
                  </p>
                  Centrum Księgowe ZYSK prowadzi ścisłą współpracę ze
                  specjalistami bezpośrednio związanymi z prowadzeniem
                  działalności gospodarczej, którzy również mogą przez nasze
                  Centrum służyć pomocą w sprawach związanych z zakresu BHP,
                  obsługi prawnej oraz wszelkiego rodzaju ubezpieczeń.
                </Col>
              </Row>
            </Container>
          </div>
          <div id="contact">
            <div id="wrapperBreakeLine">
              <div id="wrapperItemLeft">
                <div id="breakeLine">
                  <hr />
                </div>
              </div>
              <div id="wrapperItemCentral">
                <div id="wrapperText">Kontakt</div>
              </div>
              <div id="wrapperItemRight">
                <div id="breakeLine">
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="contact">
            <Container>
              <Row>
                <Col md={8}>
                  <div class="contactPhoto"></div>
                </Col>
                <Col md={4} id="contactRight">
                  <h1 id="contactRightFistLine">SKONTAKTUJ SIĘ Z NAMI</h1>
                  <h2 id="contactRightSecondLine">Biuro rachunkowe BILANS</h2>
                  <div>
                    <p>
                      <FaPhoneSquareAlt id="contactIcon" />
                      +48 502 734 330
                    </p>
                    <p>
                      <FaEnvelope id="contactIcon" /> robg@interia.pl
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <Row>
            <div id="breakeLine">
              <hr />
            </div>
          </Row>
        </Container>
        <div id="footer" class="shadow-sm p-3 mb-5 bg-white rounded">
          <Container>
            <Row>
              <Col sm="12" md="6" lg="4">
                <div class="footerCol" data-aos="fade-up">
                  <p class="footerColHeader">Header</p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </Col>

              <Col sm="12" md="6" lg="4">
                <div class="footerCol" data-aos="fade-up">
                  <p class="footerColHeader">Header</p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </Col>
              <Col sm="12" md="6" lg="4">
                <div class="footerCol" data-aos="fade-up">
                  <p class="footerColHeader">Header</p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </Col>
            </Row>
            <Container fluid="md">
              <Row>
                <Col>
                  <p id="copyright">
                    &copy; 2021
                    <span class="footerCopyrightSpan">
                      Biuro Rachunkowe Bilans
                    </span>
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
        <Nav.Link href="#home">
          <ScrollComponent />
        </Nav.Link>
      </div>
    );
  };


export default HomeView;
