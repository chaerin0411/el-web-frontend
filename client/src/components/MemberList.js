import React from 'react'
import { Link, useParams } from 'react-router-dom';


const MemberList = () => {
    const { id } = useParams();

    return (
        <nav className="board_list">
            <ul>
                <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="/img/ic_member.png" alt="프로필사진"></img></button></li>
                <li align='right'><Link to={`/memberView/${id}`}>개인정보</Link></li>
                <li align='right'><Link to={`/memberInbody`}>인바디정보</Link></li>
                <li align='right'><Link to={`/feedbackWorkout/${id}`}>운동기록</Link></li>
                <li align='right'><Link to={`/feedbackDiet/${id}`}>식단기록</Link></li>
            </ul>
        </nav>
    )
}

export default MemberList;