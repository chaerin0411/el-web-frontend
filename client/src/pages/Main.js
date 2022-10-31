import React, { useState } from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import YoutubeModal from '../components/modals/YoutubeModal';
import data from '../data/data.json'


const Main = () => {
    const [youtubeModalOn, setYoutubeModalOn] = useState(false);
    const [info, setInfo] = useState({
        title: '',
        url: '',
    })

    const youtubeLoad = (data) => {
        const info = {
            title: data.title,
            url: data.url,
        };
        setInfo(info);
        setYoutubeModalOn(true);
    };

    const settings = {
        dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
        infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
        speed: 500, // 애미메이션의 속도, 단위는 milliseconds
        slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
        slidesToScroll: 1 // 한번 스크롤시 몇장의 슬라이드를 넘길지
    };

    const workoutList = data.workoutList.map((data, index) => (
        <div div key={index} className="items" >
            <a href="#"></a>
            <div className="item" onClick={() => youtubeLoad(data)}>
                <p className="title">{data.title}</p>
                <p className="comment">{data.comment}</p>
            </div>
        </div>
    ))

    const dietList = data.dietList.map((data, index) => (
        <div key={index} className="items">
            <a href="#"></a>
            <div className="item" onClick={() => youtubeLoad(data)}>
                <p className="title">{data.title}</p>
                <p className="comment">{data.comment}</p>
            </div>
        </div>
    ))

    return (
        <div className="main">
            <YoutubeModal
                info={info}
                show={youtubeModalOn}
                onHide={() => setYoutubeModalOn(false)}
            />

            <div className="category1">
                <Slider {...settings}>
                    <img className="cimg" src="img/exercise15.jpg" />
                    <img className="cimg" src="img/exercise18.jpg" />
                    <img className="cimg" src="img/exercise20.jpg" />
                </Slider>
            </div>
            <br />
            <div className="category2">
                <div className="category2_title"><h3>운동 루틴 추천</h3></div>
                <div className="category2_item">
                    {workoutList}
                </div>

                <div className="category2_title"><h3>식단 추천</h3></div>
                <div className="category2_item">
                    {dietList}
                </div>
            </div>
        </div >
    )
}

export default Main;