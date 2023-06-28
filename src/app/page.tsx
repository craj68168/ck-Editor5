"use client";
import React from "react";
import styled from "styled-components";
import MyEditor from "./components/Editor";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .ck,
  .ck-editor__main {
    height:200px;
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <h1>Ck Editor</h1>
      <div className="ckeditor"><MyEditor /></div>
    </Wrapper>
  );
};
export default Home;
