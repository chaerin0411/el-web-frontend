import React, { useState, useRef } from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { Modal, Button, Form, Container } from "react-bootstrap";
// import { GoogleLogin } from "react-google-login";
import HorizontalLine from "../HorizonLine";


const SignUpModal = ({ show, onHide }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const password = useRef();
    password.current = watch("password");

    const onSubmit = async (data) => {
        console.log(data);
        const id = data.id;
        const password = data.password;
        const passwordConfirm = data.passwordConfirm;
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const addr = data.addr;
        const res = await axios.post(`/api/member/${id}&/${password}&/${name}&/${email}&/${phone}&/${addr}`)
        console.log(res);
    };

    const loginSuccess = () => {
        alert("회원가입이 성공적으로 이루어졌습니다.")
        document.location.href = '/';
    }
    console.log(watch("id"));

    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)} method="post">
                        <Form.Group>
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="text" name="id" placeholder="아이디 입력" autoFocus className="mb-3 rounded-pill"
                                {...register("id", { required: true, maxLength: 20, pattern: { value: /^[a-z]+[a-z0-9]{5,19}$/g, message: "잘못된 아이디 형식입니다." } })} />
                            {errors.id && errors.id.type === "required"
                                && <p> This id field is required</p>}
                            {errors.id && errors.id.type === "minLength"
                                && <p> Your input exceed maximum length</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="password" placeholder="비밀번호 입력" className="mb-3 rounded-pill"
                                {...register("password", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/ })} />
                            {errors.password && errors.password.type === "required"
                                && <p> This password field is required</p>}
                            {errors.password && errors.password.type === "minLength"
                                && <p> Password must have at least 8 characters</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" name="passwordConfirm" placeholder="비밀번호 재입력" className="mb-3 rounded-pill"
                                {...register("passwordConfirm", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/, validate: (value) => value === password.current })} />
                            {errors.passwordConfirm && errors.passwordConfirm.type === "required"
                                && <p> This password confirm field is required</p>}
                            {errors.passwordConfirm && errors.passwordConfirm.type === "minLength"
                                && <p> Password confirm must have at least 8 characters</p>}
                            {errors.passwordConfirm && errors.passwordConfirm.type === "validate"
                                && <p>The passwords do not match</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>이름</Form.Label>
                            <Form.Control type="text" name="name" placeholder="이름 입력" className="mb-3 rounded-pill"
                                {...register("name", { required: true, maxLength: 10 })} />
                            {errors.name && errors.name.type === "required"
                                && <p> This name field is required</p>}
                            {errors.name && errors.name.type === "maxLength"
                                && <p> Your input exceed maximum length</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>전화번호</Form.Label>
                            <Form.Control type="tel" name="phone" placeholder="전화번호 입력" className="mb-3 rounded-pill"
                                {...register("phone", { required: true })} />
                            {errors.email && <p>This phone field is required</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>이메일</Form.Label>
                            <Form.Control type="email" name="email" placeholder="이메일 입력" className="mb-3 rounded-pill"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>This email field is required</p>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>헬스장 위치</Form.Label>
                            <Form.Control type="search" name="addr" placeholder="헬스장 위치 입력" className="mb-3 rounded-pill"
                                {...register("addr", { required: true })} />
                            {errors.email && <p>This addr field is required</p>}
                        </Form.Group>
                        <Form.Group className="d-grid gap-2">
                            <Button block variant="dark" type="submit" className="my-3 rounded-pill" onClick={loginSuccess}>
                                회원가입
                            </Button>
                            <Form.Text className="text-muted">
                                이미 계정이 있으신가요?
                            </Form.Text>
                            <Button block variant="outline-dark" type="button" className="my-3 rounded-pill">
                                로그인
                            </Button>

                            <HorizontalLine text={"OR"} />
                            {/* <GoogleLogin render={(renderProps) => {
                            return ( */}
                            <Button
                                // onClick={renderProps.onClick} 
                                // disabled={renderProps.disabled} 
                                block
                                style={{
                                    backgroundColor: "#176BEF",
                                    borderColor: "#176BEF",
                                }}>
                                <i className="fab fa-google"></i>&nbsp; Sign Up with Google
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

export default SignUpModal;