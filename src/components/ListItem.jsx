import React from "react";
import { useTodo } from "../context/appContext";
import Todo from "./Todo";

const ListItem = ({ todo }) => {
  const { deleteTodo } = useTodo();

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  return (
    <li className="card">
      <div className="card-left">
        <input
          name="resolve"
          className="resolve"
          // value="${item.id}"
          type="checkbox"
          // ${item.complete && 'checked'}
        />
        <div className="card-info">
          <h4 className="task">
            {/* ${item.title} */}
            {todo.content}
          </h4>
        </div>
      </div>
      <button
        aria-label={`Remove ${todo.content}`}
        value={`${todo.id}`}
        name="delete-btn"
        className="fas fa-times btn delete-btn"
        onClick={console.log("todo.id", todo.id)}
      ></button>
    </li>
  );
};

export default ListItem;
