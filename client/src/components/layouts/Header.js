import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Dropdown } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";
import Notification from "../../pages/notification/Notification";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [signInModalOn, setSignInModalOn] = useState(false);
    const [notificationOn, setNotificationOn] = useState(false);

    // const logIn = () => {
    //     if (sessionStorage.getItem('id') != null) {
    //         return logRender = <p>환영합니다 {sessionStorage.getItem('id')}님 !</p>
    //     } else {
    //         return logRender = null;
    //     }
    // }

    const logOut = () => {
        const logout = window.confirm("로그아웃 하시겠습니까?");
        if (logout === true) {
            sessionStorage.clear();
        } else {
            document.location.href = '/';
        }
    }

    return (
        <>
            <SignUpModal
                show={signUpModalOn}
                onHide={() => setSignUpModalOn(false)}
            />
            <SignInModal
                show={signInModalOn}
                onHide={() => setSignInModalOn(false)}
            />
            <Notification
                show={notificationOn}
                onHide={() => setNotificationOn(false)}
            />

            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand><Nav.Link href="/">Trainer</Nav.Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/memberList">회원목록</Nav.Link>
                                <Nav.Link href="/feedbackWorkout/1">피드백</Nav.Link>
                                <Nav.Link href="/QnAList">QnA</Nav.Link>
                                <Nav.Link href="/trainerWrite">내정보</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    <Button variant="outline-dark" className="rounded-pill" onClick={() => setSignInModalOn(true)}>
                                        로그인
                                    </Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="outline-dark" className="rounded-pill" onClick={() => setSignUpModalOn(true)}>
                                        회원가입
                                    </Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" className="rounded-pill">
                                            <MenuIcon />
                                            <AccountCircleIcon />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#" onClick={() => setSignInModalOn(true)}>로그인</Dropdown.Item>
                                            <Dropdown.Item href="#" onClick={() => setSignUpModalOn(true)}>회원가입</Dropdown.Item>
                                            <Dropdown.Item href="#" onClick={() => setNotificationOn(true)}>알림</Dropdown.Item>
                                            <Dropdown.Item href="#" onClick={() => logOut()}>로그아웃</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;