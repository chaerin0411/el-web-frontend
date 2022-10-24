import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import TrainerList from '../../components/TrainerList'


const TrainerWrite = () => {
    const [writeInfo, setWriteInfo] = useState({
        id: '',
        name: '',
        age: '',
        sex: '남',
        birth: '',
        height: '',
        weight: '',
        file: '',
        award: '',
        career: '',
    })

    const inputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setWriteInfo({
            ...writeInfo,
            [e.target.name]: e.target.value
        })
    }

    const id = sessionStorage.getItem('id');

    const resTrainerWrite = async () => {
        const loadTrainerrWrite = await axios.put(`/api/trainerUpdate/${id}`, writeInfo);
        console.log(loadTrainerrWrite.data);
        document.location.href = `/trainerView/${id}`;
    }

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>{id}님</strong>
                <p>내 정보를 모두 입력해주세요.</p>
            </div>

            <TrainerList />

            <div className="board_write_wrap">
                <div className="board_write">
                    <div class="info">
                        <dl>
                            <dt>이름</dt>
                            <dd><input type="text" name="name" placeholder="이름 입력" autoFocus className="mb-3" onChange={inputChange} /></dd>
                        </dl>
                        <dl>
                            <dt>연령</dt>
                            <dd><input type="number" name="age" placeholder="연령 입력" className="mb-3" onChange={inputChange} /></dd>
                        </dl>
                        <dl>
                            <dt>성별</dt>
                            <dd>
                                <input type="radio" id="man" name="sex" value="남" checked={writeInfo.sex === "남"} onChange={inputChange} />
                                <label for="man">남자</label>
                                <input type="radio" id="woman" name="sex" value="여" checked={writeInfo.sex === "여"} onChange={inputChange} />
                                <label for="woman">여자</label>
                            </dd>
                        </dl>
                        <dl>
                            <dt>생년월일</dt>
                            <dd><input type="date" name="birth" placeholder="생년월일 입력" className="mb-3" onChange={inputChange} /></dd>
                        </dl>
                        <dl>
                            <dt>키</dt>
                            <dd><input type="number" name="height" placeholder="키 입력" className="mb-3" onChange={inputChange} /></dd>
                        </dl>
                        <dl>
                            <dt>체중</dt>
                            <dd><input type="number" name="weight" placeholder="체중 입력" className="mb-3" onChange={inputChange} /></dd>
                        </dl>
                        <dl>
                            <dt>수상</dt>
                            <dd><textarea name="award" placeholder="수상 입력" className="cont" onChange={inputChange} /></dd>
                        </dl>
                        <dl>
                            <dt>이력</dt>
                            <dd><textarea name="career" placeholder="이력 입력" className="cont" onChange={inputChange} /></dd>
                        </dl>
                    </div>
                </div>
                <div className="bt_wrap">
                    <button className="on" onClick={() => resTrainerWrite()}>등록</button>
                    <Link to={"/"}>취소</Link>
                </div>
            </div>
        </div >
    )
}

export default TrainerWrite;