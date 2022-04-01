import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <>
      <LogPage>
        <Title> Hanghae99</Title>
        <div>
          <Input type="text" placeholder="아이디" />
          <Input type="text" placeholder="비밀번호" />
        </div>
        <Button>로그인</Button>
        <SignUp>회원가입하러가기</SignUp>
      </LogPage>
    </>
  );
};

export default Login;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  font-size: 40px;
  color: #bf3641;
`;

const LogPage = styled.div`
  align-items: center;
`;

const Input = styled.input`
  font-size: medium;
  border-style: none;
  border: 1px solid gray;
  height: 40px;
  width: 400px;
  display: block;
  margin: 10px;
  outline: none;
`;

const Button = styled.button`
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 405px;
  height: 40px;
  margin: 10px;
  background-color: #bf9b8e;
  cursor: pointer;
`;

const SignUp = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
