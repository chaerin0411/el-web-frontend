import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import SendIcon from '@mui/icons-material/Send';


const FeedbackDiet = () => {
    const { id } = useParams();

    const [feedbackDiet, setFeedbackDiet] = useState({
        date: '',
        feedback: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackDiet({
            ...feedbackDiet,
            [e.target.name]: e.target.value
        })
    }

    const [loadDietList, setLoadDietList] = useState([]);

    const date = '2022-10-12';
    const resDietList = async () => {
        const loadDietList = await axios.get(`/api/feedback/dietList/${id}&/${date}`);
        console.log(loadDietList.data);
        setLoadDietList(loadDietList.data);
    }

    useEffect(() => {
        resDietList()
    }, [])

    const cellList = loadDietList.map(data => (
        <li li key={data.seq} align='right'><Link to={`/feedbackDiet/${id}&/${data.seq}`}>{data.time}</Link></li>
    ))

    const params = window.location.pathname.split('/');
    const viewPost = []
    const title = []
    for (let i = 0; i < loadDietList.length; i++) {
        title.push(loadDietList[i].time)
        if (loadDietList[i].seq === Number(params[3])) {
            console.log(loadDietList[i]);
            viewPost.push(loadDietList[i])
        }
    }

    const list = viewPost.map(data => (
        <div key={data.seq} className="card">
            <input type="hidden" name="seq" value={data.seq} />
            <img className="card_img" src={data.url} />
            <div className="card_body">
                <p className="card_text"> {data.feedback}</p>
                <textarea name="feedback" placeholder="피드백 입력" className="cont" onChange={inputChange} ></textarea>
                <button className="bt_send" onClick={() => document.location.href = `/feedbackDiet/${id}&/${data.seq}`}><SendIcon fontSize="large" /></button>
            </div>
        </div>
    )
    )

    const events = [{ title: title, date: new Date() }];

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>김동양님</strong>
                <p>식단 피드백을 입력해주세요.</p>
            </div>

            <Calendar events={events} />

            <form method="post" action="/api/feedback/dietUpdate">
                <div className="board_list_wrap">
                    <div className="bt_wrap_feedback">
                        <Link to={`/feedbackWorkout/${id}`} className="bt_diet">운동</Link>
                        <Link to={`/feedbackDiet/${id}`} className="bt_workout">식단</Link>
                    </div>
                    <nav className="feedback_list">
                        <ul>
                            {cellList}
                        </ul>
                    </nav>
                    {list}
                </div>
            </form>
        </div >
    )
}

export default FeedbackDiet;