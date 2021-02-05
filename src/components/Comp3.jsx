import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGeo } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ExperienceModal from "./ExperienceModal";
import EduImg from "../images/edu-img.jpg";

function Comp3() {
  const [modalShow, setModalShow] = useState({
    value: false,
    bname: "0"
  });

  function defineModal(event) {
    setModalShow({ value: true, bname: event.target.value });
  }

  return (
    <Container
      fluid
      style={{
        width: "100vw",
        background:
          "linear-gradient(90deg, rgba(17,140,118,0.29709383753501406) 0%, rgba(38,191,163,0.1514355742296919) 50%, rgba(17,140,118,0.2998949579831933) 100%)"
      }}
    >
      <Row>
        <img className="img-header" src={EduImg} alt="education" />
        <Col className="section-title">
          <h1>Main header</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ marginBottom: "50px" }}>
            “Text text text text”
            <br />
            someone said that
          </h2>
        </Col>
      </Row>

      <Row
        className="justify-content-center"
        style={{ padding: "inherit", marginTop: "20px", marginBottom: "50px" }}
      >
        <Col xl={3} lg={4} md={5}>
          <Row>
            <h4>Text text text text</h4>
          </Row>
          <Row>
            <h5>date</h5>
          </Row>
          <Row>
            <Badge
              style={{ backgroundColor: "#0CF2B1", fontSize: "1.1rem" }}
              variant="primary"
            >
              area
            </Badge>
          </Row>
        </Col>
        <Col xl={4} lg={6} md={6}>
          <Row>
            <h4>Text text text text</h4>
          </Row>
          <Row>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li>Text text text text.</li>
              <li>Text text text text.</li>
            </ul>
          </Row>
          <Row>
            <Col
              style={{ paddingLeft: "0" }}
              xl="auto"
              lg="auto"
              md="auto"
              sm="auto"
              xs="auto"
            >
              <p>
                <BsGeo /> location
              </p>
            </Col>
            <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
              <a href="https://mail.ru/">
                <BsLink45Deg /> Website
              </a>
            </Col>
            <Col>
              <Button
                value="7"
                variant="outline-success"
                style={{ outlinecolor: "#0CF2B1", float: "right" }}
                onClick={defineModal}
              >
                More Information
              </Button>{" "}
            </Col>
            <ExperienceModal
              show={modalShow.value}
              onHide={() => setModalShow(false)}
              mshow={modalShow.bname}
            />
          </Row>
        </Col>
      </Row>
      <Row
        className="justify-content-center"
        style={{ padding: "inherit", marginTop: "20px", marginBottom: "50px" }}
      >
        <Col xl={3} lg={4} md={5}>
          <Row>
            <h4>Text text text text </h4>
          </Row>
          <Row>
            <h5>date</h5>
          </Row>
          <Row>
            <Badge
              style={{ backgroundColor: "#183940", fontSize: "1.1rem" }}
              variant="primary"
            >
              area
            </Badge>
          </Row>
        </Col>
        <Col xl={4} lg={6} md={6}>
          <Row>
            <h4>Text text text text</h4>
          </Row>
          <Row>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li>Text text text text.</li>
              <li>Text text text text.</li>
              <li>Text text text text.</li>
            </ul>
          </Row>
          <Row>
            <Col
              style={{ paddingLeft: "0" }}
              xl="auto"
              lg="auto"
              md="auto"
              sm="auto"
              xs="auto"
            >
              <p>
                <BsGeo /> location
              </p>
            </Col>
            <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
              <a href="https://pnu.mail.ru/en/">
                <BsLink45Deg /> Website
              </a>
            </Col>
            <Col>
              <Button
                value="8"
                variant="outline-success"
                style={{ outlinecolor: "#0CF2B1", float: "right" }}
                onClick={defineModal}
              >
                More Information
              </Button>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Comp3;
