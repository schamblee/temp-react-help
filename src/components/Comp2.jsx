import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsGeo } from "react-icons/bs";
import { BsInfo } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Chart from "./Chart";
import Button from 'react-bootstrap/Button';
import ExperienceModal from "./ExperienceModal";
import ExpImg from "../images/exp-img.jpg";


function Comp2() {

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
                backgroundImage:
                    "linear-gradient(to left, #eee5e0, #f2e9e7, #f5eeef, #f8f3f5, #faf8fa, #faf8fa, #faf8fa, #faf8fa, #f8f3f5, #f5eeef, #f2e9e7, #eee5e0)"
            }}
        >

            <Row>
                <img className="img-header" src={ExpImg} alt="experience" />
                <Col className="section-title">
                    <h1>Main heading</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ marginBottom: "50px" }}>
                        "some text." <br />
            signature
          </h2>
                </Col>
            </Row>

            <Row>
                <Col style={{ marginBottom: "50px", textAlign: "center" }}>
                    <h5>
                        long intro and info
          </h5>
                </Col>
            </Row>
            <Row>
                <Col style={{ marginBottom: "50px", textAlign: "center" }}>
                    <p>
                        Remarks
          </p>
                </Col>
            </Row>

            <Row>
                <Col style={{ marginBottom: "50px" }}>
                    <Chart />
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
                        <h5>dates</h5>
                    </Row>
                    <Row>
                        <Badge style={{ backgroundColor: "#0CF2B1", fontSize: "1.1rem" }} variant="primary">F</Badge>
                    </Row>
                </Col>
                <Col xl={4} lg={6} md={6}>
                    <Row>
                        <h4>Text text text text</h4>
                    </Row>
                    <Row>
                        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                            <li>
                            Text text text text
              </li>
                            <li>
                            Text text text text
              </li>
                            <li>
                            Text text text text
              </li>
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
                            <p><BsGeo /> location</p>
                        </Col>
                        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
                            <a href="https://www.google.ru/"><BsLink45Deg /> link</a>
                        </Col>
                        <Col>
                            <Button value="1" variant="outline-success" style={{ outlinecolor: "#0CF2B1", float: "right" }} onClick={defineModal}>More Information</Button>
                            {""}
                        </Col>
                        <ExperienceModal
                            show={modalShow.value}
                            onHide={() => setModalShow({ value: false, bname: "0" })}
                            mshow={modalShow.bname}
                        />
                    </Row>
                </Col>
            </Row>

            <Row className="justify-content-center" style={{ padding: "inherit", marginTop: "20px", marginBottom: "50px" }}>
                <Col xl={3} lg={4} md={5}>
                    <Row><h4>Text text text text</h4></Row>
                    <Row><h5>dates</h5></Row>
                    <Row><Badge style={{ backgroundColor: "#183940", fontSize: "1.1rem" }} variant="primary">E</Badge></Row>
                </Col>
                <Col xl={4} lg={6} md={6}>
                    <Row><h4>Text text text text</h4></Row>
                    <Row><h4>Text text text text</h4></Row>
                    <Row><h4>Text text text text</h4></Row>
                    <Row><ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        <li>Text text text text</li>
                        <li>Text text text text</li>
                        <li>Text text text text</li>
                    </ul></Row>
                    <Row>
                        <Col style={{ paddingLeft: "0" }} xl="auto" lg="auto" md="auto" sm="auto" xs="auto"><p><BsGeo /> location</p></Col>
                        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto"><a href="https://www.mail.com"><BsLink45Deg /> link</a></Col>
                        <Col><Button value="2" variant="outline-success" style={{ outlinecolor: "#0CF2B1", float: "right" }} onClick={defineModal}>More Information</Button>{' '}</Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}

export default Comp2;