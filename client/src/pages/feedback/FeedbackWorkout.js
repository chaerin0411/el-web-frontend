import React, { useState } from 'react'
import { Button, Form, Container, ListGroup, Card } from 'react-bootstrap';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SendIcon from '@mui/icons-material/Send';
import data from '../../data/data.json';
import '../../css/calendar.css';


const QnAWorkout = () => {
    const [feedbackWorkout, setFeedbackWorkout] = useState({
        date: '',
        feedback: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackWorkout({
            ...feedbackWorkout,
            [e.target.name]: e.target.value
        })
    }

    const cellList = ["숄더프레스", "프론트레이즈", "스쿼트", "런지"]

    const list = data.workoutInfo.map((data, index) => (
        <div key={index} className="card">
            <img className="card_img" src={data.image.src} alt={data.image.alt} />
            <div className="card_body">
                <p className="card_text"> {data.desc}</p>
                <textarea name="feedback" placeholder="피드백 입력" className="cont" onChange={inputChange} ></textarea>
                <button className="bt_send" onClick={() => document.location.href = '/memberList'}><SendIcon fontSize="large" /></button>
            </div>
        </div>
    )
    )

    const events = [{ title: cellList, date: new Date() }];

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>김동양님</strong>
                <p>운동 피드백을 입력해주세요.</p>
            </div>

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                dayMaxEvents={true}
                moreLinkClick="popover"
                contentHeight="500px"
                eventDisplay='block'
                eventColor='#4F4F4F'
            />

            <form method="post" action="/api/feedback">
                <div className="board_list_wrap">
                    <div className="bt_wrap_feedback">
                        <a href="/feedbackWorkout" className="bt_workout">운동</a>
                        <a href="/feedbackDiet" className="bt_diet">식단</a>
                    </div>
                    <nav className="feedback_list">
                        <ul>
                            {cellList.map(cell => {
                                return <li align='right'>{cell}</li>
                            })}
                        </ul>
                    </nav>

                    {list}

                </div>
            </form >
        </div >
    )
}

export default QnAWorkout;