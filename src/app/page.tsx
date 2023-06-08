"use client";
import React from "react";
import styled from "styled-components";
import MyEditor from "./components/Editor";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Home = () => {
  return (
    <Wrapper>
      <h1>Hello Ck Editor</h1>
      <MyEditor />
    </Wrapper>
  );
};
export default Home;
