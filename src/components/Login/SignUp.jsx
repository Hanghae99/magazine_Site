import React from "react";
import styled from "styled-components";

const SignUp = (props) => {
  return (
    <>
      <SignPg>
        <Title>SignUp</Title>
        <div>
          <Bold>아이디</Bold>
          <Input type="text" placeholder="아이디를 입력해주세요" />
        </div>
        <div>
          <Bold>닉네임</Bold>
          <Input type="text" placeholder="닉네임을 입력해주세요" />
        </div>
        <div>
          <Bold>비밀번호</Bold>
          <Input type="text" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div>
          <Bold>비밀번호 확인</Bold>
          <Input type="text" placeholder="한번 더 입력해주세요" />
        </div>

        <Button>회원가입하기</Button>
      </SignPg>
    </>
  );
};
export default SignUp;

const SignPg = styled.div`
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  font-size: 40px;
  color: #bf3641;
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
  margin: 20px;
  margin-left: 10px;
  background-color: #bf9b8e;
  cursor: pointer;
`;

const Bold = styled.p`
  font-weight: 600;
`;
