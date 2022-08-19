import React, { useState } from 'react'
import { Link } from 'react-router-dom'


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

    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>내정보 등록</strong>
                <p>내 정보를 모두 입력해주세요.</p>
            </div>
            <nav className="board_list">
                <ul>
                    <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src="/img/ic_member.png" alt="프로필사진"></img></button></li>
                    <li><input type="file" name="file" /></li>
                    <li align='right'><Link to={"/trainerWrite"}>내정보 등록</Link></li>
                    <li align='right'><Link to={`/trainerView/${id}`}>내정보 상세</Link></li>
                    <li align='right'><Link to={`/trainerEdit/${id}`}>내정보 수정</Link></li>
                    <li align='right'>자기소개</li>
                    <li align='right'>SNS</li>
                </ul>
            </nav>

            <form method="post" action="/api/trainerUpdate" multipart="form-data">
                <input type="hidden" name="id" value={id} />
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
                        <a href="/">목록</a>
                        <button className="on" onClick={() => document.location.href = `/api/trainerUpdate/${sessionStorage.getItem('id')}`}>수정</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default TrainerWrite;