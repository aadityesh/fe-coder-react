import React, { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import Button from "./Button";
import ThemeContext from "../../ThemeContext";

const CodeEditor = ({ code, handleInput, env, view }) => {
  let { html, css, js } = code;
  let { setHTML, setCSS, setJS } = handleInput;
  let { theme } = useContext(ThemeContext);

  let codeToRender = "";
  if (env == "html") codeToRender = code.html;
  else if (env == "css") codeToRender = code.css;
  else if (env == "js") codeToRender = code.js;

  useEffect(() => {
    if (env == "html") codeToRender = code.html;
    else if (env == "css") codeToRender = code.css;
    else if (env == "js") codeToRender = code.js;
  }, [env]);

  const handleInputChange = (e) => {
    if (env == "html") setHTML(e);
    else if (env == "css") setCSS(e);
    else if (env == "js") setJS(e);
  };

  //   const editorStyle = {
  //     "min-width": view == "side-side" ? "50%" : "100%",
  //   };

  return (
    <>
      <Editor
        style={{ flexGrow: 1 }}
        className="border border-red-700 min-h-[90vh] bg-btnColor"
        language={`${env}`}
        defaultValue={`/****  Write your code here ****/`}
        value={codeToRender ? codeToRender : ""}
        onChange={(newCode) => handleInputChange(newCode)}
        theme={theme == "light" ? "light" : "vs-dark"}
        //   onChange={(newCode) => console.log(newCode)}
      />
    </>
  );
};

export default CodeEditor;
