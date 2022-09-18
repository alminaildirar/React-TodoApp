import React, { useEffect, useState } from "react";
import { useTodo } from "../context/appContext";
import ListItem from "./ListItem";
import ClipLoader from "react-spinners/ClipLoader";

const List = () => {
  const { getTodos, todos, isLoading } = useTodo();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul className="list">
      {isLoading ? (
        <div className="loading">
          <ClipLoader
            color={"#fff"}
            loading={isLoading}
            size={50}
            className="loading-spinner"
          />
        </div>
      ) : (
        todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} />;
        })
      )}
    </ul>
  );
};

export default List;
