import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

const MyEditor = () => {
  return (
    <Wrapper>
      <CKEditor
        editor={Editor}
        data="<p>Hello from ckeditor5</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log("onchange ckeditor", { event, editor, data });
        }}
        onReady={editor => {
          console.log("onReady ckeditor", editor);
        }}
        onBlur={(event, editor) => {
          console.log("onBlur ckeditor", { event, editor });
        }}
        onFocus={(event, editor) => {
          console.log("onFocus ckeditor", { event, editor });
        }}
      />
    </Wrapper>
  );
};

export default MyEditor;