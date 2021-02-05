import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


function LoginModal(props) {

    const x = props.mshow ? props.mshow : 0;
    console.log(props.mshow);

    return (
        <div className="login-wrapper">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation="true"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#402D22" }}>
                        Authentication
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form action="/login" method="POST">
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="User name" />
                            </Col>
                            <Col>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={props.onHide} variant="success">Log In</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LoginModal;