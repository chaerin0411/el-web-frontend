import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TrainerList from '../../components/TrainerList'


function TrainerView() {
    const { id } = useParams();

    const [loadTrainerView, setLoadTrainerView] = useState([]);
    const resTrainerView = async () => {
        const loadTrainerView = await axios.get(`/api/trainerView/${id}`);
        console.log(loadTrainerView.data);
        setLoadTrainerView(loadTrainerView.data);
    }

    useEffect(() => {
        resTrainerView()
    }, [])

    const mapViewPost = loadTrainerView.map((data, index) => {
        return (
            <div key={index} className="board_wrap">
                <div className="board_title">
                    <strong>{data.name}님</strong>
                    <p>내 정보를 확인하세요.</p>
                </div>

                <TrainerList />

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
                                <dd>{data.sex}</dd>
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
                                <dt>전화번호</dt>
                                <dd>{data.phone}</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>{data.email}</dd>
                            </dl>
                            <dl>
                                <dt>수상</dt>
                                <dd>{data.award}</dd>
                            </dl>
                            <dl>
                                <dt>이력</dt>
                                <dd>{data.career}</dd>
                            </dl>
                            <dl>
                                <dt>헬스장위치</dt>
                                <dd>{data.addr}</dd>
                            </dl>
                            <dl>
                                <dt>프로필사진</dt>
                                <dd>{data.image}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <button className="on" onClick={() => document.location.href = `/trainerEdit/${id}`}>수정</button>
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div className='trainerView'>
            {mapViewPost}
        </div>
    )
}

export default TrainerView; 