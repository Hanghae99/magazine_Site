import React from "react";
import Login from "../components/login/Login";
import styled from "styled-components";
import Header from "../components/header/Header";

const LoginPage = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
