import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import rasa from "../../Assets/Projects/rasa.jpeg";
import globalWarming from "../../Assets/Projects/global_warming.png";
import frameworkPerformance from "../../Assets/Projects/repsonse-checker.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rasa}
              isBlog={false}
              title="Rasa Chatbot"
              description="A weather chatbot developed using Angular, Java with Spring-Boot, and Python with the Rasa Framework. It includes real-time messaging capabilities via Websockets."
              ghLink="https://github.com/flbrun/rasa-weatherbot"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={globalWarming}
                isBlog={false}
                title="Global Warming Data Analysis"
                description="This Python Notebook was developed as a university project to analyze historical global temperature data sourced from Kaggle. Leveraging advanced data analysis techniques, it delves into past temperature trends across the world. Additionally, this notebook employs sophisticated forecasting algorithms to project future temperature patterns based on this rich dataset. "
                ghLink="https://github.com/flbrun/climate-change"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={frameworkPerformance}
                isBlog={false}
                title="Framework performance"
                description="This project focuses on evaluating the performance of various frameworks. To facilitate fair comparisons, standardized services are built using different frameworks. In the second phase, a dedicated test tool is developed to send requests to these services and measure response times, CPU load, and other relevant metrics."
                ghLink="https://github.com/flbrun/language_and_framework_performance"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
