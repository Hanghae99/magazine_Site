import React from "react";
import SignUp from "../components/Login/SignUp";
import styled from "styled-components";

const SignUpPage = (props) => {
  return (
    <>
      <Layout>
        <SignUp />
      </Layout>
    </>
  );
};

export default SignUpPage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
