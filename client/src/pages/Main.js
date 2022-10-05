import React from 'react'

const Main = () => {
    return (
        <div className="main">
            <div className="category1">
                <div className="category1_menu">
                    <div className="window">
                        <ul className="container">
                            <li><img className="cimg selected" src="img/exercise15.jpg" /></li>
                            <li><img className="cimg" src="img/exercise15.jpg" /></li>
                            <li><img className="cimg" src="img/exercise18.jpg" /></li>
                            <li><img className="cimg" src="img/exercise20.jpg" /></li>
                        </ul>
                    </div>
                    <ul className="buttons">
                        <li><div className="button selected"></div></li>
                        <li><div className="button"></div></li>
                        <li><div className="button"></div></li>
                        <li><div className="button"></div></li>
                    </ul>
                </div>
            </div>
            <br />

            <div className="category2">
                <div className="category2_title"><h3>운동 루틴 추천</h3></div>
                <div className="category2_item">
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">어깨 루틴</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">어깨 루틴</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">어깨 루틴</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">어깨 루틴</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                </div>

                <div className="category2_title"><h3>식단 추천</h3></div>
                <div className="category2_item">
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">아침</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">점심</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">저녁</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                    <div className="items">
                        <a href="#"></a>
                        <div className="item">
                            <p className="title">간식</p>
                            <p className="comment">레터럴레이즈, 숄더프레스 ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main;