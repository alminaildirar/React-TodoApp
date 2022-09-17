import React, { useEffect, useState } from "react";
import { useTodo } from "../context/appContext";
import ListItem from "./ListItem";

const List = () => {
  const { getTodos, todos } = useTodo();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul className="list">
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default List;
