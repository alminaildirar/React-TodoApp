import React from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { deleteTodo } from "../api/calls";
deleteTodo(9)


const Container = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <ThemeSwitchButton />
       <h1>AAAA</h1>
    </div>
  );
};

export default Container;
