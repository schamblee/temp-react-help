import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Self from "../images/self-res.jpg";
import Highlight from "../components/Highlight";
import PrfImg from "../images/prf-img.jpg";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";

function Comp1() {
  const { user } = useAuth0();
  return (
    <Container
      fluid
      style={{
        width: "100vw",
        backgroundImage:
          "linear-gradient(to left, #eee5e0, #f2e9e7, #f5eeef, #f8f3f5, #faf8fa, #faf8fa, #faf8fa, #faf8fa, #f8f3f5, #f5eeef, #f2e9e7, #eee5e0);"
      }}
    >
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
      <Row>
        <img className="img-header" src={PrfImg} alt="profile" />
        <Col className="section-title">
          <h1>Heading</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ marginBottom: "70px" }}>Text heding</h2>
        </Col>
      </Row>
      <Row style={{ width: "100vw" }}>
        <Col lg="9" md="8" style={{ padding: 0 }}>
          <img className="img-self" src={Self} alt="self" />
        </Col>
        <Col className="intro-text">
          <div>
            <h3>Main header</h3>
            <p style={{ color: "white" }}>intro text.</p>
            <h3>Details</h3>
            <h4>Comments:</h4>
            <p style={{ color: "white" }}>name</p>
            <h4>Location:</h4>
            <p style={{ color: "white" }}>location</p>
            <h4>more infor:</h4>
            <p style={{ color: "white" }}>some text.</p>
            <h4>remarks:</h4>
            <p style={{ color: "white" }}>long text here.</p>
          </div>
        </Col>
      </Row>
      <Spinner />
    </Container>
  );
}

export default withAuthenticationRequired(Comp1, {
  onRedirecting: () => <Spinner />
});
