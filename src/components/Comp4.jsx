import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import SklImg from "../images/skl-img.jpg";

function Comp4() {
  return (
    <Container
      fluid
      style={{
        width: "100vw",
        backgroundImage:
          "linear-gradient(to right top, #183940, #1c3933, #293626, #36321f, #402d22)",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Row>
        <img className="img-header" src={SklImg} alt="experience" />
        <Col className="section-title">
          <h1>Main header</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ marginBottom: "50px", color: "white" }}>
            “Text text text text
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Comp4;
