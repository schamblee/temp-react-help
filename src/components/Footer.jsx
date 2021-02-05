import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsHouseFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  var cYear = new Date().getFullYear();

  return (
    <Container
      fluid
      style={{
        width: "100vw",
        backgroundImage:
          "linear-gradient(180deg, rgba(8,5,4,0.75) 0%, rgba(41,29,22,1) 100%)"
      }}
    >
      <Row>
        <Col className="section-title">
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2
            style={{ marginBottom: "50px", color: "white", fontSize: "2rem" }}
          >
            "some words some text... <br /> more text." <br />
            text
          </h2>
        </Col>
      </Row>
      <Row
        className="justify-content-center"
        style={{ padding: "inherit", marginTop: "20px" }}
      >
        <Col
          xl={{ span: 5, order: 1 }}
          lg={{ span: 5, order: 1 }}
          md={{ span: 12, order: false }}
          sm={{ span: 12, order: false }}
          xs={{ span: 12, order: false }}
          style={{ paddingLeft: 0 }}
        >
          <h3 style={{ width: "100%" }}>Menu</h3>
        </Col>
        <Col
          xl={{ span: 5, order: 4 }}
          lg={{ span: 5, order: 4 }}
          md={{ span: 12, order: false }}
          sm={{ span: 12, order: false }}
          xs={{ span: 12, order: false }}
          style={{ marginBottom: "50px" }}
        >
          <Row>
            <h5>
              <Link className="skill-text" to="/">
                Home
              </Link>
            </h5>
          </Row>
          <Row>
            <h5>
              <Link className="skill-text" to="/comp1">
                Link1
              </Link>
            </h5>
          </Row>
          <Row>
            <h5>
              <Link className="skill-text" to="/comp2">
                Link2
              </Link>
            </h5>
          </Row>
          <Row>
            <h5>
              <Link className="skill-text" to="/comp3">
                Link3
              </Link>
            </h5>
          </Row>
          <Row>
            <h5>
              <Link className="skill-text" to="/comp4">
                Link4
              </Link>
            </h5>
          </Row>
          <Row>
            <h5>
              <Link className="skill-text" to="/comp5">
                Link5
              </Link>
            </h5>
          </Row>
        </Col>

        <Col
          xl={{ span: 1, order: 2 }}
          lg={{ span: 1, order: 2 }}
          md={{ span: false }}
          sm={{ span: false }}
          xs={{ span: false }}
        />
        <Col
          xl={{ span: 1, order: 5 }}
          lg={{ span: 1, order: 5 }}
          md={{ span: false }}
          sm={{ span: false }}
          xs={{ span: false }}
        />

        <Col
          xl={{ span: 5, order: 3 }}
          lg={{ span: 5, order: 3 }}
          md={{ span: 12, order: false }}
          sm={{ span: 12, order: false }}
          xs={{ span: 12, order: false }}
          style={{ paddingLeft: 0 }}
        >
          <h3 style={{ width: "100%" }}>Contacts</h3>
        </Col>
        <Col
          xl={{ span: 1, order: 6 }}
          lg={{ span: 1, order: 6 }}
          md={{ span: 1, order: 6 }}
          sm={{ span: 1, order: 6 }}
          xs={{ span: 1, order: 6 }}
          style={{ marginBottom: "50px" }}
        >
          <Row>
            <h5 className="skill-text">
              <BsHouseFill />
            </h5>
          </Row>
          <Row>
            <h5 className="skill-text">
              <BsFillEnvelopeFill />
            </h5>
          </Row>
          <Row>
            <h5 className="skill-text">
              <ImPhone />
            </h5>
          </Row>
          <Row>
            <h5 className="skill-text">
              <FaDiscord />
            </h5>
          </Row>
        </Col>
        <Col
          xl={{ span: 4, order: 7 }}
          lg={{ span: 4, order: 7 }}
          md={{ span: 11, order: 7 }}
          sm={{ span: 11, order: 7 }}
          xs={{ span: 11, order: 7 }}
          style={{ textAlign: "right" }}
        >
          <Row>
            <h5 className="skill-text">address</h5>
          </Row>
          <Row>
            <h5 className="skill-text">email</h5>
          </Row>
          <Row>
            <h5 className="skill-text">+0000000000000</h5>
          </Row>
          <Row>
            <h5 className="skill-text">nickname</h5>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6
            style={{
              marginBottom: "70px",
              color: "#118C76",
              textAlign: "center"
            }}
          >
            <BiCopyright /> author. location. 2020-{cYear}
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
