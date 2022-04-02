import React from "react";
import Login from "../components/Login/Login";
import styled from "styled-components";
import Header from "../components/Header/Header";

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
