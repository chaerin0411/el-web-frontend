import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Modal, Button, Form, Container } from "react-bootstrap";
// import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../HorizonLine";

const SignInModal = ({ show, onHide }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const req = axios.get(`/api/login/${data.id}&/${data.password}`)
            .then(
                res => {
                    console.log(res);
                    console.log(res.data);
                    if (res.data.length == 0) {
                        alert("로그인 정보가 일치하지 않습니다.")
                    } else if (res.data.length > 0) {
                        alert("로그인에 성공하였습니다.")
                        alert(`환영합니다 ${data.id}님`)
                        sessionStorage.setItem('id', data.id)
                        document.location.href = '/';
                    }
                    // console.log(id)
                    // console.log(password)
                    console.log(data.id);
                    console.log(data.password);
                }
            )
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)} method='post'>
                        <Form.Group>
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text" name="id" placeholder="아이디 입력" autoFocus className="mb-3 rounded-pill" {...register("id", { required: true })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="password" placeholder="비밀번호 입력" className="mb-3 rounded-pill" {...register("password", { required: true })} />
                        </Form.Group>
                        <Form.Group className="d-grid gap-2">
                            <Button block variant="dark" type="submit" className="my-3 rounded-pill">
                                로그인
                            </Button>
                            <Form.Text className="text-muted">
                                아직 계정이 없으신가요?
                            </Form.Text>
                            <Button block variant="outline-dark" type="button" className="my-3 rounded-pill">
                                회원가입
                            </Button>
                            <HorizontalLine text={"OR"} />
                            {/* <GoogleLogin
                            render={(renderProps) => {
                                return ( */}
                            <Button
                                // onClick={renderProps.onClick}
                                // disabled={renderProps.disabled}
                                block
                                style={{
                                    backgroundColor: "#176BEF",
                                    borderColor: "#176BEF",
                                }}
                            >
                                <i className="fab fa-google"></i>&nbsp; Sign In with Google
                            </Button>
                            {/* );
                            }}
                        /> */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};

export default SignInModal;