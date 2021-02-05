import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Port1 from "../images/port1.jpg";
import Port2 from "../images/port2.jpg";
import Port4 from "../images/port4.jpg";
import PtfImg from "../images/ptf-img.jpg";

function Comp5() {
  return (
    <Container
      fluid
      style={{
        width: "100vw",
        backgroundImage:
          "linear-gradient(90deg, hsla(191, 45%, 17%, 0.2) 0%, hsla(191, 45%, 17%, 0.1) 50%, hsla(191, 45%, 17%, 0.2) 100%)"
      }}
    >
      <Row>
        <img className="img-header" src={PtfImg} alt="portfolio" />
        <Col className="section-title">
          <h1>Main header</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ marginBottom: "50px" }}>
            "Text text text text." <br />
            someone
          </h2>
        </Col>
      </Row>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Port1} />
          <Card.Body>
            <Card.Title>text</Card.Title>
            <Card.Text>Text text text text</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Port2} />
          <Card.Body>
            <Card.Title>text</Card.Title>
            <Card.Text>Text text text text. </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Port4} />
          <Card.Body>
            <Card.Title>text</Card.Title>
            <Card.Text>Text text text text</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Comp5;
