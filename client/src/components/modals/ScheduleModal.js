import React from "react";
import { Modal, Form, Container } from "react-bootstrap";


const ScheduleModal = (props) => {

    const info = props.info;

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">{info.start}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>제목</h4>
                    <h5>{info.title}</h5><br />
                    <h4>설명</h4>
                    <h5>{info.description ? (info.description) : ("")}</h5><br />
                    <h4>시작일시</h4>
                    <h5>{info.start}</h5><br />
                    <h4>종료일시</h4>
                    <h5>{info.end}</h5>
                </Modal.Body>
            </Container>
        </Modal >
    );
};

export default ScheduleModal;