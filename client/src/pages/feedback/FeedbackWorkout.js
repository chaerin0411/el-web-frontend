import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import SendIcon from '@mui/icons-material/Send';


const FeedbackWorkout = () => {
    const [feedbackWorkout, setFeedbackWorkout] = useState({
        date: '2022-11-08',
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

    const { id } = useParams();

    const [loadMemberName, setLoadMemberName] = useState([]);

    const resMemberView = async () => {
        const loadMemberView = await axios.get(`/api/memberView/${id}`);
        console.log(loadMemberView.data);
        setLoadMemberName(loadMemberView.data[0].name);
    }

    const [loadWorkoutList, setLoadWorkoutList] = useState([]);

    const resWorkoutList = async () => {
        const loadWorkoutList = await axios.get(`/api/feedback/workoutList/${id}&/${feedbackWorkout.date}`);
        console.log(loadWorkoutList.data);
        setLoadWorkoutList(loadWorkoutList.data);
    }

    const resWorkoutUpdate = async (seq) => {
        const loadWorkoutUpdate = await axios.put('/api/feedback/workoutUpdate', { seq: seq, feedback: feedbackWorkout.feedback, });
        console.log(loadWorkoutUpdate.data);
        setFeedbackWorkout(loadWorkoutUpdate.data);
        document.location.href = `/feedbackWorkout/${id}&/${seq}`
    }

    useEffect(() => {
        resMemberView()
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
            <video autoplay controls loop muted className="card_img">
                <source src={data.url} type="video/mp4" />
                피드백 운동 영상입니다.
            </video>
            <div className="card_body">
                <p className="card_text"> {data.feedback}</p>
                <textarea name="feedback" placeholder="피드백 입력" className="cont" onChange={inputChange} ></textarea>
                <button className="bt_send" onClick={() => resWorkoutUpdate(data.seq)}><SendIcon fontSize="large" /></button>
            </div>
        </div>
    )
    )

    const events = [{ title: title, date: new Date() }];

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>{loadMemberName}님</strong>
                <p>운동 피드백을 입력해주세요.</p>
            </div>

            <Calendar events={events} />

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
        </div >
    )
}

export default FeedbackWorkout;