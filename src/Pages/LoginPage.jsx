import React from "react";
import Login from "../components/Login/Login";
import styled from "styled-components";

const LoginPage = (props) => {
  return (
    <>
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
  margin-top: 250px;
`;
