import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const ReviewBtn = (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <Button
        onClick={() => {
          history.push("/detail");
        }}
      >
        +
      </Button>
    </>
  );
};

export default ReviewBtn;

const Button = styled.button`
  border-style: none;
  font-size: 100px;
  width: 90px;
  height: 90px;
  background-color: #515931;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
