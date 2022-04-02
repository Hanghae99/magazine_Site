import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getCookie, deleteCookie } from "../../utils/Cookie";

const Header = (props) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("MY_COOKIE");
    console.log(cookie);

    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  if (isLogin) {
    return (
      <>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <i class="fa-solid fa-house"></i>
        </Button>

        <Button>내정보</Button>

        <Button
          onClick={() => {
            deleteCookie("MY_COOKIE");
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
          navigate("/");
        }}
      >
        <i className="fa-solid fa-house"></i>
      </Button>

      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </Button>

      <Button
        onClick={() => {
          navigate("/sign");
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
