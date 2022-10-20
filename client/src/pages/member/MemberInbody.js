import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MemberList from '../../components/MemberList'


function MemberInbody() {
    const { id } = useParams();

    const [loadMemberView, setLoadMemberView] = useState([]);

    const resMemberView = async () => {
        const loadMemberView = await axios.get(`/api/memberView/${id}`);
        console.log(loadMemberView.data);
        setLoadMemberView(loadMemberView.data);
    }

    useEffect(() => {
        resMemberView()
    }, [])

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>{loadMemberView.name}</strong>
                <p>회원 인바디 정보를 확인하세요.</p>
            </div>

            <MemberList />

            <div className="board_write_wrap">
                <div className="board_write">
                    <div class="info">
                        <img src="/img/inbody.png" alt="회원인바디" height="650px" />
                    </div>
                </div>
                <div className="bt_wrap">
                    <button className="on" onClick={() => document.location.href = "/memberList"}>목록</button>
                </div>
            </div>
        </div >
    )
}

export default MemberInbody;