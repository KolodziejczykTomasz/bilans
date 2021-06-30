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
import Usluga1 from "../assets/images/uslugi/uslugi1.jpg"
import Usluga2 from "../assets/images/uslugi/uslugi2.jpg";
import Usluga3 from "../assets/images/uslugi/uslugi3.jpg";

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
              <p class="jumboHeroTextWrapperSubtitleLine">Lidzbark Warmiński | Dobre Miasto</p>
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
                    rachunkowych nr ....... .
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
                  Biuro służyć pomocą w sprawach związanych z zakresu BHP,
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
                    <span id="serviceColSpan">Biuro Rachunkowe</span>
                  </p>
                  Siedziba główna biura rachunkowego mieści się w Lidzbarku
                  Warmińskim przy ulicy Poniatowegiego 18, ale zapraszamy
                  również do naszej filii w Dobry Mieście przy ulicy Jana Pawła
                  II 25.
                </Col>
              </Row>
              <Row id="servicesSecondLine">
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">Facebook</span>
                  </p>
                  Proponujemy również nowy kanał informacyjny dla tych, którzy
                  chcą być na bieżąco lub chcą pogłębić swoją wiedzę lub się nią
                  podzielić – dla wszystkich zainteresowanych zapraszamy na
                  profil społecznościowy.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">Wnioski o dotację</span>
                  </p>
                  Planujesz zarejestrować swoją działalność gospodarczą,
                  potrzebujesz profesjonalnej pomocy przy sporządzeniu wniosku
                  do Urzędu Pracy w swojej miejscowości lub innej? Pomożemy
                  napisać profesjonalny i kompleksowy wniosek na pozyskanie
                  środków na rozpoczęcie działalności gospodarczej.
                </Col>
                <Col sm="12" md="6" lg="4" id="servicesCol">
                  <p id="serviceColHeader">
                    <FaCheck id="checkIcon" />
                    <span id="serviceColSpan">Sprawozdania BDO</span>
                  </p>
                  Zapraszamy do skorzystania z usług sporządzania zbiorczego
                  zestawienia danych o rodzajach i ilości odpadów, o sposobach
                  gospodarowania nimi oraz o instalacjach i urządzeniach
                  służących do odzysku i unieszkodliwiania odpadów.
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
                <Col md={7}>
                  <div class="contactPhoto"></div>
                </Col>
                <Col md={5} id="contactRight">
                  <h1 id="contactRightFistLine">SKONTAKTUJ SIĘ Z NAMI</h1>
                  <p id="contactRightSecondLine">
                    Siedziba główna biura rachunkowego
                  </p>
                  <ul id="contactList">
                    <li>ul. Poniatowskiego 18</li>
                    <li>11-100 Lidzbark WArmiński</li>
                  </ul>
                  <div>
                    <p id="contactRightSecondLine">Filia naszego biura</p>
                    <ul id="contactList">
                      <li>ul. Jana Pawła II 25</li>
                      <li>11-040 Dobre Miasto</li>
                    </ul>
                    <div></div>
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
                  <p class="footerColHeader">Własna firma z nami</p>
                  <div className="footerWidget"></div>
                  <img
                    className="footerWidgetImage"
                    src={Usluga1}
                    alt="Usługa - zakłądanie własnej firmy"
                  />
                </div>
              </Col>

              <Col sm="12" md="6" lg="4">
                <div class="footerCol" data-aos="fade-up">
                  <p class="footerColHeader">Tarcza antykryzysowa 8.0</p>
                  <div className="footerWidget"></div>
                  <img
                    className="footerWidgetImage"
                    src={Usluga2}
                    alt="Usługa - zakłądanie własnej firmy"
                  />
                </div>
              </Col>
              <Col sm="12" md="6" lg="4">
                <div class="footerCol" data-aos="fade-up">
                  <p class="footerColHeader">Samozatrudnienie</p>
                  <div className="footerWidget"></div>
                  <img
                    className="footerWidgetImage"
                    src={Usluga3}
                    alt="Usługa - zakłądanie własnej firmy"
                  />
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
