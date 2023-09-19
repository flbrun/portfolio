import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a deep passion for programming, and my journey in the world of coding has been quite the adventure, if I do say so myself! 🚀
              <br />
              <br />My programming repertoire includes classic languages such as
              <i>
                <b className="purple"> Java, Javascript and Rust </b>
              </i>
              <br />
              <br />
              I thrive on the excitement of building cutting-edge
              <i>
                <b className="purple"> web technologies  </b> and crafting efficient
                <b className="purple"> microservices. </b>
              </i>
              <br />
              <br />
              There's always something new to learn and create, and I can't help but embrace it all with open arms! 🌟
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">Connect </span>with me on</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/flbrun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="linkedin.com/in/florian-brunner-618400267"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
