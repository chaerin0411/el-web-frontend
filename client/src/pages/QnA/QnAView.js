import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const QnAView = () => {
    const [feedbackQnA, setFeedbackQnA] = useState({
        answer: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFeedbackQnA({
            ...feedbackQnA,
            [e.target.name]: e.target.value
        })
    }

    const { seq } = useParams();

    const [loadQnAView, setLoadQnAView] = useState([]);

    const resQnAView = async () => {
        const loadQnAView = await axios.get(`/api/QnAView/${seq}`);
        console.log(loadQnAView.data);
        setLoadQnAView(loadQnAView.data);
    }

    const resQnAUpdate = async (seq) => {
        const loadQnAUpdate = await axios.put(`/api/QnAUpdate`, { seq: seq, answer: feedbackQnA.answer, });
        console.log(loadQnAUpdate.data);
        setFeedbackQnA(loadQnAUpdate.data);
        document.location.href = `/QnAView/${seq}`;
    }

    useEffect(() => {
        resQnAView()
    }, [])

    const mapViewPost = loadQnAView.map(data => {
        return (
            <div key={data.seq} className="board_wrap">
                <div className="board_title">
                    <strong>QnA상세</strong>
                    <p>QnA를 확인하세요.</p>
                </div>

                <div className="board_view_wrap">
                    <div className="board_view">
                        <div className="title">
                            {data.title}
                        </div>
                        <div class="info">
                            <dl>
                                <dt>번호</dt>
                                <dd>{data.seq}</dd>
                            </dl>
                            <dl>
                                <dt>작성자</dt>
                                <dd><dd>{data.writer}</dd></dd>
                            </dl>
                            <dl>
                                <dt>등록일</dt>
                                <dd>{data.regDate}</dd>
                            </dl>
                            <dl>
                                <dt>답변</dt>
                                <dd>{data.answerCheck}</dd>
                            </dl>
                        </div>
                        <div className="cont">
                            <dl>
                                <dt>질문</dt>
                                <dd>{data.content}</dd>
                            </dl>
                        </div>
                        <div className="answer">
                            <dl>
                                <dt>답변</dt>
                                <dd>{data.answer}</dd>
                            </dl>
                        </div>
                    </div>
                    <textarea name="answer" placeholder="답변 입력" className="cont" onChange={inputChange} />
                    <div className="bt_wrap">
                        <Link to={"/QnAList"}>목록</Link>
                        <button className="on" onClick={() => resQnAUpdate(data.seq)}>등록</button>
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div className="QnAView">
            {mapViewPost}
        </div>
    )
}

export default QnAView;