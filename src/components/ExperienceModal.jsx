import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import a1 from "../assets/a1.pdf";
import a2 from "../assets/iataCertHonor.jpg";
import a3 from "../assets/kidnap.pdf";

function ExperienceModal(props) {
  const x = props.mshow ? props.mshow : 0;
  console.log(props.mshow);

  const modalContent = [
    {
      inf1: "default text0",
      inf2: "default comment0",
      inf3: "default remark0"
    },
    {
      inf0: "F",
      inf1: "xxx.",
      inf2: "xxx:",
      inf3: a1
    },
    {
      inf0: "E",
      inf1: "xxx",
      inf2: "xxx:",
      inf3: a2
    },
    {
      inf0: "D",
      inf1: "xxx.",
      inf2: "xxx",
      inf3: ""
    },
    {
      inf0: "C",
      inf1: "xxx",
      inf2: "xxx",
      inf3: a3
    },
    {
      inf0: "B",
      inf1: "xxx",
      inf2: "xxx",
      inf3: "remark5"
    },
    {
      inf0: "A",
      inf1: "xxx",
      inf2: "xxx",
      inf3: "remark6"
    },
    {
      inf1: "text7",
      inf2: "comment7",
      inf3: "remark7"
    },
    {
      inf1: "text8",
      inf2: "comment8",
      inf3: "remark8"
    },
    {
      inf1: "text9",
      inf2: "comment9",
      inf3: "remark9"
    },
    {
      inf1: "text10",
      inf2: "comment10",
      inf3: "remark10"
    },
    {
      inf1: "text11",
      inf2: "comment11",
      inf3: "remark11"
    },
    {
      inf1: "text12",
      inf2: "comment12",
      inf3: "remark12"
    }
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation="true"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#402D22" }}
        >
          Additional Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Object {modalContent[x].inf0}</h4>
        <p>{modalContent[x].inf1}</p>
        <p>{modalContent[x].inf2}</p>
        <a href={modalContent[x].inf3} target="_blank" rel="noreferrer">
          View Document
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="success">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExperienceModal;
