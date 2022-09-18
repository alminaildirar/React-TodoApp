import React from "react";
import { useState } from "react";
import { useTodo } from "../context/appContext";

const ListItem = ({ todo }) => {
  const { deleteTodo, updateComplete, updateTodo } = useTodo();

  const [editable, setEditable] = useState(false);
  const [newContent, setNewContent] = useState(todo.content);

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  const handleUpdate = async (id) => {
    await updateTodo(id, newContent);
  };

  const handleComplete = async (id, isCompleted) => {
    await updateComplete(id, isCompleted);
  };

  return (
    <li className="card">
      <div className="card-left">
        <div
          className={`todo-checkbox ${todo.isCompleted ? "checked" : ""}`}
          onClick={() => handleComplete(todo.id, !todo.isCompleted)}
        ></div>
        <div className="card-info">
          <h4 className={`${todo.isCompleted ? "complete" : ""}`}>
            {editable ? (
              <input
                type="text"
                name="task"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="add-input"
                placeholder="Edit Todo..."
                autoComplete="off"
              />
            ) : (
              todo.content
            )}
          </h4>
        </div>
      </div>
      {editable ? (
        <button className="edit-btn" onClick={() => setEditable(false)}>
          <span className="material-symbols-outlined trash-color">cancel</span>
        </button>
      ) : (
        <button className="edit-btn" onClick={() => setEditable(true)}>
          <span className="material-symbols-outlined edit-icon">edit</span>
        </button>
      )}
      {editable && (
        <button onClick={() => handleUpdate(todo.id)}>
          <span className="material-symbols-outlined edit-check-btn">done</span>
        </button>
      )}
      <button className="trash-btn" onClick={() => handleDelete(todo.id)}>
        <span className="material-symbols-outlined trash-color">delete</span>
      </button>
    </li>
  );
};

export default ListItem;
