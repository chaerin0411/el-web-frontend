import React from "react";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_menu_box">
                <div className="left_menu_box">
                    <h1>EL TRAINER</h1>
                    <div className="left_menu_box_button_wrap">
                        <button>PlayStore</button>
                        <button>AppStore</button>
                    </div>
                </div>
                <nav className="footer_menu">
                    <ul>
                        <li className="footer_title">COMPANY</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Legal Information</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                    <ul>
                        <li className="footer_title">HELP CENTER</li>
                        <li><a href="#">Find a Property</a></li>
                        <li><a href="#">How To Host?</a></li>
                        <li><a href="#">Why Us?</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Rental Guides</a></li>
                    </ul>
                    <ul>
                        <li className="footer_title">CONTACT INFO</li>
                        <li><a href="#">Phone: 010-0000-0000</a></li>
                        <li><a href="#">Email: EL@naver.com</a></li>
                        <li><a href="#">Location: 서울시 구로구 중앙로 6길 17</a></li>
                    </ul>
                </nav>
            </div>

            <div className="menu_box">
                <p>Copyright © EL. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;