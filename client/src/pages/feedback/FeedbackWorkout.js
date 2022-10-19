import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import SendIcon from '@mui/icons-material/Send';


const FeedbackWorkout = () => {
    const { id } = useParams();

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

    const [loadWorkoutList, setLoadWorkoutList] = useState([]);

    const date = '2022-10-17';
    const resWorkoutList = async () => {
        const loadWorkoutList = await axios.get(`/api/feedback/workoutList/${id}&/${date}`);
        console.log(loadWorkoutList.data);
        setLoadWorkoutList(loadWorkoutList.data);
    }

    useEffect(() => {
        resWorkoutList()
    }, [])

    const cellList = loadWorkoutList.map(data => (
        <li li key={data.seq} align='right'><Link to={`/feedbackWorkout/${id}&/${data.seq}`}>{data.name}</Link></li>
    ))

    const params = window.location.pathname.split('/');
    const viewPost = []
    const title = []
    for (let i = 0; i < loadWorkoutList.length; i++) {
        title.push(loadWorkoutList[i].name)
        if (loadWorkoutList[i].seq === Number(params[3])) {
            console.log(loadWorkoutList[i]);
            viewPost.push(loadWorkoutList[i])
        }
    }

    const list = viewPost.map(data => (
        <div key={data.seq} className="card">
            <input type="hidden" name="seq" value={data.seq} />
            <img className="card_img" src={data.url} />
            <div className="card_body">
                <p className="card_text"> {data.feedback}</p>
                <textarea name="feedback" placeholder="피드백 입력" className="cont" onChange={inputChange} ></textarea>
                <button className="bt_send" onClick={() => document.location.href = `/feedbackWorkout/${id}/${data.seq}`}><SendIcon fontSize="large" /></button>
            </div>
        </div>
    )
    )

    const events = [{ title: title, date: new Date() }];

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>김동양님</strong>
                <p>운동 피드백을 입력해주세요.</p>
            </div>

            <Calendar events={events} />

            <form method="post" action="/api/feedback/workoutUpdate">
                <div className="board_list_wrap">
                    <div className="bt_wrap_feedback">
                        <Link to={`/feedbackWorkout/${id}`} className="bt_workout">운동</Link>
                        <Link to={`/feedbackDiet/${id}`} className="bt_diet">식단</Link>
                    </div>
                    <nav className="feedback_list">
                        <ul>
                            {cellList}
                        </ul>
                    </nav>
                    {list}
                </div >
            </form >
        </div >
    )
}

export default FeedbackWorkout;