import React from "react";
import SignUp from "../components/Login/SignUp";
import styled from "styled-components";
import Header from "../components/Header/Header";

const SignUpPage = (props) => {
  return (
    <>
      <Header />
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
