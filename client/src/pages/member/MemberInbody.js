import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MemberList from '../../components/MemberList'


function MemberInbody() {
    const { id } = useParams();

    const [loadMemberName, setLoadMemberName] = useState([]);

    const resMemberView = async () => {
        const loadMemberView = await axios.get(`/api/memberView/${id}`);
        console.log(loadMemberView.data);
        setLoadMemberName(loadMemberView.data[0].name);
    }

    useEffect(() => {
        resMemberView()
    }, [])

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>{loadMemberName}님</strong>
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