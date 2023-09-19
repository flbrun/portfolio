import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Florian Brunner </span>
            from <span className="purple"> Germany.</span>
            <br /> I am a Full Stack Software Engineer with a Business Informatics Degree (BSc.).
            <br />
            Additionally, I am currently employed as a software developer at
            Deutsche Telekom IT GmbH.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              ￫ Playing Games
            </li>
            <li className="about-activity">
              ￫ Working on cars
            </li>
            <li className="about-activity">
              ￫ Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
