import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);

  if (isLogin) {
    return (
      <>
        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          <i className="fa-solid fa-house"></i>
        </Button>

        <Button>내정보</Button>

        <Button
          onClick={() => {
            dispatch(userActions.logOut({}));
          }}
        >
          로그아웃
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        <i className="fa-solid fa-house"></i>
      </Button>

      <Button
        onClick={() => {
          history.push("/login");
        }}
      >
        로그인
      </Button>

      <Button
        onClick={() => {
          history.push("/sign");
        }}
      >
        회원가입
      </Button>
    </>
  );
};

export default Header;

const Button = styled.button`
  font-size: large;
  justify-content: center;
  align-items: center;
  border-style: none;
  background-color: white;
  cursor: pointer;
  color: #736055;
`;
