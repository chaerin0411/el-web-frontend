import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


const TrainerList = () => {
    const id = sessionStorage.getItem('id');
    const image = sessionStorage.getItem('image');

    const [Images, setImages] = useState([]);
    const inputChange = (e) => {
        const formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/fomr-data' }
        }
        formData.append("file", e.target.files[0]);

        axios.post('/api/trainer/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.filePath]);

                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }

    return (
        <nav className="board_list">
            <ul>
                <li align='right'><button className="bt_member" onClick={() => document.location.href = '#'}><img src={image ? image : "/img/ic_member.png"}></img></button></li>
                <li><input type="file" name="file" accept="image/*" onChange={inputChange} /></li>
                <li align='right'><Link to={"/trainerWrite"}>내정보 등록</Link></li>
                <li align='right'><Link to={`/trainerView/${id}`}>내정보 상세</Link></li>
                <li align='right'><Link to={`/trainerEdit/${id}`}>내정보 수정</Link></li>
                <li align='right'>자기소개</li>
            </ul>
        </nav >
    )
}

export default TrainerList;