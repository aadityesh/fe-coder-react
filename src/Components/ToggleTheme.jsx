import { Switch } from "@mui/material";
import React from "react";

const ToggleTheme = ({ handleThemeChange, label }) => {
  return (
    <>
      <section className="flex gap-1 p-2 justify-center items-center self-start">
        <Switch onClick={handleThemeChange} label={`${label}`} />
        <p>{label}</p>
      </section>
    </>
  );
};

export default ToggleTheme;
