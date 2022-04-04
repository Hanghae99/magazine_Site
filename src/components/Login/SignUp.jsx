import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signUp = () => {
    if (id === "" || pwd === "" || user_name === "") {
      return;
    }
    if (pwd !== pwdCheck) {
      return;
    }

    dispatch(userActions.signUpFB(id, pwd, user_name));
  };
  return (
    <>
      <SignPg>
        <Title>Sign Up</Title>
        <div>
          <Bold>ID</Bold>
          <Input
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div>
          <Bold>Nickname</Bold>
          <Input
            type="text"
            placeholder="닉네임"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <Bold>Password</Bold>
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div>
          <Bold>Password Check</Bold>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </div>

        <Button onClick={signUp}>Click</Button>
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
  justify-content: left;
  margin-bottom: 30px;
  font-size: 50px;
  /* margin-left: 130px; */
  color: #515931;
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
  width: 80px;
  height: 60px;
  margin-top: 20px;
  margin-left: 190px;
  background-color: #515931;
  cursor: pointer;
  color: white;
`;

const Bold = styled.p`
  font-weight: 600;
  color: #f29e6d;
`;
