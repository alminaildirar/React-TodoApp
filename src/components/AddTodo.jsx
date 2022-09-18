import React, { useState } from "react";
import { useTodo } from "../context/appContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { createTodo, loading } = useTodo();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo.length < 3) {
      return alert("Todo must be at least 3 characters length.");
    }
    try {
      await createTodo(todo);
      setTodo("");
    } catch (error) {
      console.log("error", error);
    }
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
      <input type="submit" className="add-btn" value="Add" disabled={loading} />
    </form>
  );
};

export default AddTodo;
