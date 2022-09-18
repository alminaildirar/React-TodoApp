import React from "react";
import AddTodo from "./AddTodo";

const Header = () => {
  return (
    <div className="header">
      {/* <h2 id="date"></h2>
        <span id="task-count"></span> */}
      <AddTodo />
    </div>
  );
};

export default Header;
