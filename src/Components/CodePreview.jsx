import { Position } from "monaco-editor";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../ThemeContext";

const CodePreview = ({ code, view, previewWidth }) => {
  let { html, css, js } = code;
  let { theme } = useContext(ThemeContext);
  let [toRender, setToRender] = useState(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToRender(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `);
    }, 300); // Debounce delay

    return () => clearTimeout(timeout); // Clear timeout on input change
  }, [code]);

  // const previewStyles = {
  //   // "min-width": view == "side-side" ? "50%" : "100%",
  //   width: previewWidth,
  // };

  return (
    <div
      style={{
        "min-width": previewWidth ? previewWidth : "50%",
        backgroundColor: theme == "dark" ? "#9157ce" : "#b4b8f4",
      }}
      className="border border-red-800 min-h-[50%] bg-white p-2"
    >
      <iframe
        className="min-w-[100%] min-h-[100%]"
        srcDoc={toRender}
        title="output"
        sandbox="allow-scripts"
      >
        {toRender}
      </iframe>
    </div>
  );
};

export default CodePreview;
