import React from "react";
import styled from "styled-components";

const ReviewBox = (props) => {
  return (
    <>
      <Review>
        <InputReview type="text" placeholder="댓글 내용을 입력해주세요 :)" />
        <Button>작성</Button>
      </Review>
    </>
  );
};
export default ReviewBox;

const InputReview = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 50px;
  outline: none;
`;

const Button = styled.button`
  border-style: none;
  background-color: #bf634e;
  color: white;
  width: 70px;
  height: 55px;
  margin-left: 10px;
  font-size: large;
`;

const Review = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
