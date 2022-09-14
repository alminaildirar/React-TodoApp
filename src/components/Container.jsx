import React from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitchButton from "./ThemeSwitchButton";

const Container = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <ThemeSwitchButton />
    </div>
  );
};

export default Container;
