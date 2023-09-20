import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiJava, DiDart, DiRasberryPi, DiRust,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>



      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDart />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRasberryPi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiRust />
        </Col>
    </Row>
  );
}

export default Techstack;
