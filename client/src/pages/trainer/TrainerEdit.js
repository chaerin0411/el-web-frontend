import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import TrainerList from '../../components/TrainerList'


const MemberEdit = () => {
    const [editInfo, setEditInfo] = useState({
        name: '',
        age: '',
        sex: '',
        birth: '',
        height: '',
        weight: '',
        phone: '',
        email: '',
        award: '',
        career: '',
        addr: '',
        file: '',
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

    const resTrainerUpdate = async () => {
        const loadTrainerUpdate = await axios.put(`/api/trainerUpdate/${id}`, editInfo);
        console.log(loadTrainerUpdate.data);
        document.location.href = `/trainerView/${id}`;
    }

    const [loadTrainerView, setLoadTrainerView] = useState([]);
    const resTrainerView = async () => {
        const loadTrainerView = await axios.get(`/api/trainerView/${id}`);
        console.log(loadTrainerView.data);
        setLoadTrainerView(loadTrainerView.data);
    }

    useEffect(() => {
        resTrainerView()
    }, [])

    const mapViewPost = loadTrainerView.map(data => {
        return (
            <div key={data.id} className="board_wrap">
                <div className="board_title">
                    <strong>{data.name}님</strong>
                    <p>내정보를 수정해주세요.</p>
                </div>

                <TrainerList />

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
                                <dt>전화번호</dt>
                                <dd><input type="tel" name="phone" value={data.phone} className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd><input type="email" name="email" value={data.email} className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>수상</dt>
                                <dd><input type="text" name="award" value={data.award} className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>이력</dt>
                                <dd><input type="text" name="career" value={data.career} className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                            <dl>
                                <dt>헬스장위치</dt>
                                <dd><input type="text" name="addr" value={data.addr} className="mb-3" onChange={inputChange} /></dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <button className="on" onClick={() => resTrainerUpdate()}> 수정</button>
                        <Link to={"/trainerView"}>취소</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='memberEdit'>
            {mapViewPost}
        </div>
    )
}

export default MemberEdit