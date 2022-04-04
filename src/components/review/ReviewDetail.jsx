import React from "react";
import styled from "styled-components";

const ReviewDetail = (props) => {
  return (
    <>
      <Wrapper>
        <div>
          <Title>게시글작성🖌</Title>
          <Input type="text" placeholder="사진을 선택해주세용 :)" />
          <input type="file" />
        </div>

        <div>
          <Textarea cols="90" rows="20" placeholder="게시글 내용"></Textarea>
        </div>

        <Button>작성완료</Button>
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
