import { useContext, useRef, useState } from "react";
import "./App.css";
import CodeEditor from "./Components/CodeEditor";
import ThemeContext from "../ThemeContext";
import Navigation from "./Components/Navigation";
import CodePreview from "./Components/CodePreview";

function App() {
  const [html, setHTML] = useState(
    `<h1>Code Editor</h1>\n<p> Edit code to see live preview</p>
    `
  );
  const [css, setCSS] = useState(
    `h1 {
      font-size: 36px; 
      padding: 0; 
      margin: 0;
    }`
  );
  const [js, setJS] = useState('console.log("Hello")');
  const [previewWidth, setPreviewWidth] = useState("50%");
  const [view, setView] = useState("side-side");
  const [env, setEnvironment] = useState("html");
  let { theme, setTheme } = useContext(ThemeContext);
  const containerRef = useRef(null);

  const handleThemeChange = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const onMouseDown = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newEditorWidth = ((e.clientX / containerWidth) * 100).toFixed(2);
      setPreviewWidth(`${newEditorWidth}%`);
      const resizer = document.querySelectorById("resizerElement");
      console.log(resizer);
      resizer.style.left = `${newEditorWidth}%`;
    }
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const pos = {
    "background-color": "greenyellow",
    position: "absolute",
    width: "12px",
    cursor: "ew-resize",
    // transform: `translateX(${previewWidth}px)`,
    "z-index": "10",
  };

  return (
    <>
      <div className={`max-w-[100vw] max-h-screen ${theme}`}>
        <p className="text-3xl px-2">{previewWidth}</p>
        <header>
          <Navigation
            env={env}
            previewWidth={previewWidth}
            theme={theme}
            view={view}
            setView={setView}
            setPreviewWidth={setPreviewWidth}
            setEnvironment={setEnvironment}
            handleThemeChange={handleThemeChange}
          />
        </header>
        {view == "side-side" && (
          <main className="text-xl flex max-h-[100%] max-w-[100%]">
            <CodePreview
              previewWidth={previewWidth}
              code={{ html, css, js }}
              view={view}
              ref={containerRef}
            />
            <div
              id="resizerElement"
              style={{ pos }}
              className="resizer"
              onMouseDown={onMouseDown}
              draggable
            ></div>
            <CodeEditor
              code={{ html, css, js }}
              handleInput={{ setCSS, setHTML, setJS }}
              env={env}
              view={view}
            />
            {/* {/* <CodeEditor code={html} setCode={setHTML} /> */}
            {/* <CodeEditor code={html} setCode={setJS} /> */}
          </main>
        )}
        {view == "top-down" && (
          <main className="text-xl flex flex-col max-h-[100%] max-w-[100%]">
            <CodePreview code={{ html, css, js }} view={view} />
            <CodeEditor
              code={{ html, css, js }}
              handleInput={{ setCSS, setHTML, setJS }}
              env={env}
              view={view}
            />
            {/* {/* <CodeEditor code={html} setCode={setHTML} /> */}
            {/* <CodeEditor code={html} setCode={setJS} /> */}
          </main>
        )}
      </div>
    </>
  );
}

export default App;
