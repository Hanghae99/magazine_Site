import React from "react";
import { useNavigate } from "react-router";

const MainPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </button>

      <button
        onClick={() => {
          navigate("/sign");
        }}
      >
        회원가입
      </button>

      <h1> 여기는 메인페이지야!</h1>
    </>
  );
};

export default MainPage;
