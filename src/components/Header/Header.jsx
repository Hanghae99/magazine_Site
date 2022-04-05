import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import user, { actionCreators as userActions } from "../../redux/modules/user";
import { History } from "../../redux/store";
import { apiKey } from "../../utils/firebase";
import { actionCreators as postActions } from "../../redux/modules/post";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  const sessionKey = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;

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
            <Button>어서오세요, 연재님🙋‍♀️ </Button>
            <Button>
              <i className="fa-solid fa-bell"></i>
            </Button>

            <Button
              onClick={() => {
                dispatch(userActions.logOutFB());
              }}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
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
            Login
          </Button>
          <Button
            onClick={() => {
              history.push("/sign");
            }}
          >
            <i className="fa-solid fa-user-plus"></i>
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
  color: #515931;
  margin: 5px;
`;
