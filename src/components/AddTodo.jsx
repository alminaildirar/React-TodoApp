import React, { useState, useContext } from "react";
import { useTodo } from "../context/appContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { createTodo } = useTodo();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo(todo);
    setTodo("");
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={todo}
        onChange={handleChange}
        className="add-input"
        placeholder="Add a new Task..."
        autoComplete="off"
      />
      <input type="submit" className="add-btn" value="Add" />
    </form>
  );
};

export default AddTodo;
