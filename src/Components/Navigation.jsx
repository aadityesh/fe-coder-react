import Button from "./Button";
import ChangeView from "./ChangeView";
import ToggleTheme from "./ToggleTheme";

function Navigation({
  env,
  setEnvironment,
  handleThemeChange,
  theme,
  view,
  setView,
  previewWidth,
  setPreviewWidth,
}) {
  return (
    <nav className="flex gap-5 text-xl justify-between items-center p-2 border border-black">
      <section className="flex gap-2 justify-between items-center flex-1 pr-[40px] max-w-[30%]">
        <ToggleTheme label={theme} handleThemeChange={handleThemeChange} />
        <ChangeView className="self-center" view={view} setView={setView} />
      </section>
      <section className="flex gap-5 pl-5">
        <Button onClick={() => setEnvironment("html")} label="HTML" />
        <Button onClick={() => setEnvironment("css")} label="CSS" />
        <Button onClick={() => setEnvironment("javascript")} label="JS" />
      </section>
    </nav>
  );
}

export default Navigation;
