import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionCreators as postActions } from "../../redux/modules/post";

const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const is_login = useSelector((state) => state.user.isLogin);
  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  if (!is_login) {
    return (
      <>
        <h1>앗 잠깐! 로그인이 필요한 서비스입니다</h1>
        <button
          onClick={() => {
            history.replace("/");
          }}
        >
          로그인하러 가기
        </button>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <div>
          <Title>게시글작성🖌</Title>
          <Input type="text" placeholder="사진을 선택해주세용 :)" />
          <input type="file" />
        </div>

        <div>
          <Textarea
            onChange={changeContents}
            cols="90"
            rows="20"
            placeholder="게시글 내용"
          ></Textarea>
        </div>

        <Button onClick={addPost}>작성완료</Button>
      </Wrapper>
    </>
  );
};

export default ReviewDetail;

const Title = styled.h1`
  display: flex;
  justify-content: left;
  margin-left: 500px;
  color: #515931;
  margin-top: 100px;
  font-size: 900;
`;

const Input = styled.input`
  margin: 20px;
  margin-left: 500px;
`;

const Button = styled.button`
  border-style: none;
  background-color: #f29e6d;
  padding: 10px;
  color: white;
  font-weight: 500;
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 820px;
`;

const Textarea = styled.textarea`
  margin: 20px;
  margin-left: 500px;
  outline: none;
`;

const Wrapper = styled.div`
  margin-top: 120px;
`;
