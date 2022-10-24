import React from 'react'
import ReactPlayer from "react-player";
import { Modal, Container } from "react-bootstrap";


const Test = (props) => {
    const info = props.info;

    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">{info.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReactPlayer
                            className="player"
                            url={info.url}
                            width="750x"
                            heigth="700px"
                            playing={true}
                            muted={true}
                            controls={true}
                        />
                    </Modal.Body>
                </Container>
            </Modal >
        </div>
    )
}

export default Test;