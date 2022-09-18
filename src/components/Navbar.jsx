import React from "react";
import { useTodo } from "../context/appContext";

const Navbar = ({ theme }) => {
  const { user } = useTodo();
  return (
    <div className={`navbar ${theme === "dark" ? "dark" : "light"}`}>
      {user}
    </div>
  );
};

export default React.memo(Navbar);
