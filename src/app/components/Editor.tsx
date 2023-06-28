import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

const MyEditor = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const editorRef = useRef<any>(null);
  const { CKEditor, Editor } = editorRef?.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <Wrapper>
      {editorLoaded && (
        <CKEditor
          editor={Editor}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log("onchange ckeditor", { event, editor, data });
          }}
          onReady={(editor: any) => {
            console.log("onReady ckeditor", editor);
          }}
          onBlur={(event: any, editor: any) => {
            console.log("onBlur ckeditor", { event, editor });
          }}
          onFocus={(event: any, editor: any) => {
            console.log("onFocus ckeditor", { event, editor });
          }}
        />
      )}
    </Wrapper>
  );
};

export default MyEditor;
