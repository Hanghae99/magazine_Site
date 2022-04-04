import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { History } from "../../redux/store";
import { apiKey } from "../../utils/firebase";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const sessionKey = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;

  console.log(isSession);

  // console.log(sessionKey);
  // console.log(sessionStorage.getItem(sessionKey));

  if (isLogin && isSession) {
    return (
      <>
        <Total>
          <Home>
            <Button
              onClick={() => {
                history.push("/");
              }}
            >
              <i className="fa-solid fa-house"></i>
            </Button>
          </Home>
          <Wrapper>
            <Button>내정보 | </Button>
            <Button>알림 | </Button>

            <Button
              onClick={() => {
                dispatch(userActions.logOutFB());
              }}
            >
              로그아웃
            </Button>
          </Wrapper>
        </Total>
      </>
    );
  }
  return (
    <>
      <Total>
        <Home>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            <i className="fa-solid fa-house"></i>
          </Button>
        </Home>
        <Wrapper>
          <Button
            onClick={() => {
              history.push("/login");
            }}
          >
            로그인 |
          </Button>
          <Button
            onClick={() => {
              history.push("/sign");
            }}
          >
            회원가입
          </Button>
        </Wrapper>
      </Total>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const Home = styled.div`
  font-size: large;
`;

const Button = styled.button`
  font-size: large;
  justify-content: center;
  align-items: center;
  border-style: none;
  background-color: white;
  cursor: pointer;
  color: #736055;
`;
