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
import BrandLogo from "../assets/images/logo.svg";

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
              <span class="NaviBarndSpan">Biuro BILANS</span>
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
                <Nav.Link
                  href="#about"
                  style={{
                    width: "100px",
                    textDecoration: "none",
                    color: "#3f2b55",
                  }}
                >
                  O nas
                </Nav.Link>
                <Nav.Link
                  href="#services"
                  style={{
                    width: "100px",
                    textDecoration: "none",
                    color: "#3f2b55",
                  }}
                >
                  Usługi
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  style={{
                    width: "100px",
                    textDecoration: "none",
                    color: "#3f2b55",
                  }}
                >
                  Kontakt
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
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
                    Centrum Księgowe ZYSK, prowadzi swoją działalność na
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
          <div id="services">
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
                    <FaCheck
                      id="checkIcon"
                      style={{
                        fontSize: "50",
                        border: "2px solid rgba(108, 68, 162, 0.5)",
                        padding: "1px 2px",
                        color: "#3f2b55",
                      }}
                    />
                    <span id="serviceColSpan">WSPÓŁPRACA</span>
                  </p>
                  Centrum Księgowe ZYSK prowadzi ścisłą współpracę ze
                  specjalistami bezpośrednio związanymi z prowadzeniem
                  działalności gospodarczej, którzy również mogą przez nasze
                  Centrum służyć pomocą w sprawach związanych z zakresu BHP,
                  obsługi prawnej oraz wszelkiego rodzaju ubezpieczeń.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck
                      id="checkIcon"
                      style={{
                        fontSize: "50",
                        border: "2px solid rgba(108, 68, 162, 0.5)",
                        padding: "1px 2px",
                        color: "#3f2b55",
                      }}
                    />
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
                    <FaCheck
                      id="checkIcon"
                      style={{
                        fontSize: "50",
                        border: "2px solid rgba(108, 68, 162, 0.5)",
                        padding: "1px 2px",
                        color: "#3f2b55",
                      }}
                    />
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
                    <FaCheck
                      id="checkIcon"
                      style={{
                        fontSize: "50",
                        border: "2px solid rgba(108, 68, 162, 0.5)",
                        padding: "1px 2px",
                        color: "#3f2b55",
                      }}
                    />
                    <span id="serviceColSpan">RELAKS</span>
                  </p>
                  Proponujemy również chwilę relaksu dla tych, którzy chcą
                  pogłębić swoją wiedzę z zarządzania lub się nią podzielić –
                  dla wszystkich zainteresowanych blog na stronie internetowej.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck
                      id="checkIcon"
                      style={{
                        fontSize: "50",
                        border: "2px solid rgba(108, 68, 162, 0.5)",
                        padding: "1px 2px",
                        color: "#3f2b55",
                      }}
                    />
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
                    <FaCheck
                      id="checkIcon"
                      style={{
                        fontSize: "50",
                        border: "2px solid rgba(108, 68, 162, 0.5)",
                        padding: "1px 2px",
                        color: "#3f2b55",
                      }}
                    />
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
                  <p id="contactRightFistLine">SKONTAKTUJ SIĘ Z NAMI</p>
                  <p id="contactRightSecondLine">Biuro rachunkowe BILANS</p>
                  <div>
                    <p>
                      <FaPhoneSquareAlt id="contactIcon" />
                      +48 123 456 789
                    </p>
                    <p>
                      <FaEnvelope id="contactIcon" /> Email@mail.pl
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
                    &copy; 2020
                    <span class="footerCopyrightSpan">Biuro BILANS</span>
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
