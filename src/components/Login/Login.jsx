import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { setCookie } from "../../utils/Cookie";

const Login = (props) => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const login = () => {
    setCookie("user_id", "yeonjae", 3);
    setCookie("user_pwd", "yyyy", 3);
  };
  const navigate = useNavigate();
  return (
    <>
      <LogPage>
        <Title> Login</Title>
        <div>
          <Input
            value={id}
            onChange={changeId}
            type="text"
            placeholder="아이디"
          />
          <Input
            value={pwd}
            onChange={changePwd}
            type="text"
            placeholder="비밀번호"
          />
        </div>
        <Button
          onClick={() => {
            login();
          }}
        >
          로그인
        </Button>
        <SignUp
          onClick={() => {
            navigate("/sign");
          }}
        >
          회원가입하러가기
        </SignUp>
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
