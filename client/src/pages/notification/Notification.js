import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Container } from "react-bootstrap";


const Notification = ({ show, onHide }) => {
    const [loadMemberList, setLoadMemberList] = useState([]);

    const resMemberList = async () => {
        const loadMemberList = await axios.get('/api/memberList');
        console.log(loadMemberList.data);
        setLoadMemberList(loadMemberList.data);
    }

    useEffect(() => {
        resMemberList()
    }, [])

    const list = loadMemberList.map(data => (
        <Modal.Body key={data.id}>
            <p><a href={`/feedbackWorkout/${data.id}`} className="link">{data.name}님이 피드백 운동을 등록했습니다.<br /><small>{data.id * 5} mins ago</small></a></p>
            <p><a href={`/feedbackDiet/${data.id}`} className="link">{data.name}님이 피드백 식단을 등록했습니다.<br /><small>{data.id * 5} mins ago</small></a></p>
        </Modal.Body>

    ))

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">모든알림</Modal.Title>
                </Modal.Header>
                {list}
            </Container>
        </Modal >
    )
}

export default Notification;