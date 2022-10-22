import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import MemberList from '../../components/MemberList'


const MemberEdit = () => {
    const [editInfo, setEditInfo] = useState({
        name: '',
        age: '',
        sex: '남',
        birth: '',
        height: '',
        weight: '',
        period: '',
        regDate: '',
        endDate: '',
        phone: '',
        email: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setEditInfo({
            ...editInfo,
            [e.target.name]: e.target.value
        })
    }

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

    const mapViewPost = loadMemberView.map(data => {
        return (
            <div key={data.id} className="board_wrap">
                <div className="board_title">
                    <strong>{data.name}</strong>
                    <p>회원 정보를 수정해주세요.</p>
                </div>

                <MemberList />

                <form method="post" action="/api/memberUpdate">
                    <input type="hidden" name="id" value={data.id} />
                    <div className="board_write_wrap">
                        <div className="board_write">
                            <div class="info">
                                <dl>
                                    <dt>이름</dt>
                                    <dd><input type="text" name="name" value={data.name} autoFocus className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>연령</dt>
                                    <dd><input type="number" name="age" value={data.age} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>성별</dt>
                                    <dd>
                                        <input type="radio" id="man" name="sex" value="남" checked={data.sex === "남"} onChange={inputChange} />
                                        <label for="man">남자</label>
                                        <input type="radio" id="woman" name="sex" value="여" checked={data.sex === "여"} onChange={inputChange} />
                                        <label for="woman">여자</label>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>생년월일</dt>
                                    <dd><input type="date" name="birth" value={data.birth} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>키</dt>
                                    <dd><input type="number" name="height" value={data.height} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>체중</dt>
                                    <dd><input type="number" name="weight" value={data.weight} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>운동기간</dt>
                                    <dd><input type="text" name="period" value={data.period} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>등록일</dt>
                                    <dd><input type="date" name="regDate" value={data.regDate} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>종료일</dt>
                                    <dd><input type="date" name="endDate" value={data.endDate} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>전화번호</dt>
                                    <dd><input type="tel" name="phone" value={data.phone} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>이메일</dt>
                                    <dd><input type="email" name="email" value={data.email} className="mb-3" onChange={inputChange} /></dd>
                                </dl>
                                <dl>
                                    <dt>사진</dt>
                                    <dd><input type="file" name="file" /></dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bt_wrap">
                            <button className="on">수정</button>
                            <Link to={"/memberList"}>취소</Link>
                        </div>
                    </div>
                </form>
            </div >
        )
    })

    return (
        <div className='memberEdit'>
            {mapViewPost}
        </div>
    )
}

export default MemberEdit;