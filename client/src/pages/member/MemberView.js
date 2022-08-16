import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function MemberView() {
    const { id } = useParams();

    const [loadMemberView, setLoadMemberView] = useState([]);

    const resMemberView = async () => {
        const loadMemberView = await axios.post(`/api/memberView/${id}`);
        console.log(loadMemberView.data);
        setLoadMemberView(loadMemberView.data);
    }

    useEffect(() => {
        resMemberView()
    }, [])

    const mapViewPost = loadMemberView.map(data => {
        return (
            <div key={data.id} className="board_wrap">
                <div className="board_title">
                    <strong>회원상세</strong>
                    <p>회원 정보를 확인하세요.</p>
                </div>

                <div className="board_write_wrap">
                    <div className="board_write">
                        <div class="info">
                            <dl>
                                <dt>이름</dt>
                                <dd>{data.name}</dd>
                            </dl>
                            <dl>
                                <dt>연령</dt>
                                <dd>{data.age}</dd>
                            </dl>
                            <dl>
                                <dt>성별</dt>
                                <dd><dd>{data.sex}</dd></dd>
                            </dl>
                            <dl>
                                <dt>생년월일</dt>
                                <dd>{data.birth}</dd>
                            </dl>
                            <dl>
                                <dt>키</dt>
                                <dd>{data.height}</dd>
                            </dl>
                            <dl>
                                <dt>체중</dt>
                                <dd>{data.weight}</dd>
                            </dl>
                            <dl>
                                <dt>운동기간</dt>
                                <dd>{data.period}</dd>
                            </dl>
                            <dl>
                                <dt>등록일</dt>
                                <dd>{data.regDate}</dd>
                            </dl>
                            <dl>
                                <dt>종료일</dt>
                                <dd>{data.endDate}</dd>
                            </dl>
                            <dl>
                                <dt>전화번호</dt>
                                <dd>{data.phone}</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>{data.email}</dd>
                            </dl>
                            <dl>
                                <dt>사진</dt>
                                <dd>{data.image}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <a href="/memberList">목록</a>
                        <button className="on" onClick={() => document.location.href = `/memberEdit/${data.id}`}>수정</button>
                        <button className="on" onClick={() => document.location.href = `/api/memberDelete/${data.id}`}>삭제</button>
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div className='memberView'>
            {mapViewPost}
        </div>
    )
}

export default MemberView;