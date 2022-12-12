import { React, useEffect, useRef, useState, useMemo, createRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import PhoneData from "../PhoneData/CountryCodes.json";

export default function Login({ modal, setModal }) {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    console.log(PhoneData);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    function useOutsideClick(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setModal(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
    const phoneref = useRef(null);
    useEffect(() => {
        phoneref.current.focus();
    }, []);
    return (
        <>
            <MainContainer>
                <Wrapper>
                    <Container>
                        <RightContainer ref={wrapperRef}>
                            <LoginContainer>
                                <LoginHeading>
                                    Create Your Account Now!
                                </LoginHeading>
                                <LoginInfo>Enter Details to Signup</LoginInfo>
                                <Form>
                                    <InputContainer>
                                        <TextInput
                                            type="text"
                                            placeholder="First Name"
                                            ref={phoneref}
                                            onChange={(e) =>
                                                setName(e.currentTarget.value)
                                            }
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextInput
                                            type="email"
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setEmail(e.currentTarget.value)
                                            }
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextInput
                                            type="phone"
                                            placeholder="Phone Number"
                                            onChange={(e) =>
                                                setPhone(e.currentTarget.value)
                                            }
                                        />
                                    </InputContainer>
                                    <MainButtonContainer>
                                        <SignupButton></SignupButton>
                                        <ForgotButton
                                            onClick={() => {
                                                setModal(false);
                                            }}
                                        >
                                            Create a New Account?
                                        </ForgotButton>
                                    </MainButtonContainer>
                                    <ButtonContainer>
                                        <SubmitButton onClick={handleSubmit}>
                                            Send OTP
                                        </SubmitButton>
                                    </ButtonContainer>
                                </Form>
                            </LoginContainer>
                        </RightContainer>
                    </Container>
                </Wrapper>
            </MainContainer>
        </>
    );
}

const MainButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SignupButton = styled.a`
    font-size: 14px;
    font-weight: 550;
    cursor: pointer;
`;
const MainContainer = styled.section`
    position: absolute;
    top: 28%;
    width: 100%;
    backdrop-filter: blur(2px);
    z-index: 100;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Container = styled.div``;
const RightContainer = styled.div`
    border-radius: 20px;
    padding: 30px;
    color: #000;
    width: 26%;
    height: 368px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    align-items: center;
    @media all and (max-width: 1080px) {
        width: 80%;
        padding: 0 55px 55px;
    }
`;
const LoginContainer = styled.div`
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (max-width: 640px) {
        font-size: 22px;
    }
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 93%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    border: 1px solid black;
    outline: none;
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const ForgotButton = styled.a`
    margin-bottom: 25px;
    font-size: 15px;
    text-decoration: none;
    color: red;
    cursor: pointer;
    font-weight: 550;
`;
const SubmitButton = styled.a`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid;
    @media all and (max-width: 640px) {
        padding: 6px 24px;
        font-size: 13px;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
