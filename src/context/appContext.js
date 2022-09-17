import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { createTodoApi, deleteTodoApi, getTodosApi } from "../api/api";
import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  CREATE_TODO_BEGIN,
  CREATE_TODO_ERROR_,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_BEGIN,
  DELETE_TODO_SUCCESS,
} from "./actions";
import reducer from "./reducer";

const TodoContext = createContext();

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  todos: [],
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = async (todo) => {
    dispatch({ type: CREATE_TODO_BEGIN });
    try {
      await createTodoApi(todo);
      dispatch({
        type: CREATE_TODO_SUCCESS,
      });
    } catch (error) {
      // dispatch({
      //   type: CREATE_TODO_ERROR_,
      //   payload: { msg: error.response.data.msg },
      // });
    }
    //clearAlert();
  };

  const getTodos = async () => {
    dispatch({ type: GET_TODOS_BEGIN });
    try {
      const { data } = await getTodosApi();
      dispatch({
        type: GET_TODOS_SUCCESS,
        payload: {
          todos: data,
        },
      });
    } catch (error) {
      // dispatch({
      //   type: CREATE_TODO_ERROR_,
      //   payload: { msg: error.response.data.msg },
      // });
    }
    //clearAlert();
  };

  const deleteTodo = async (id) => {
    dispatch({ type: DELETE_TODO_BEGIN });
    try {
      const res = await deleteTodoApi(id);
      console.log("res", res);
      dispatch({
        type: DELETE_TODO_SUCCESS,
      });
    } catch (error) {
      // dispatch({
      //   type: CREATE_TODO_ERROR_,
      //   payload: { msg: error.response.data.msg },
      // });
    }
    //clearAlert();
  };

  const values = {
    ...state,
    createTodo,
    getTodos,
    deleteTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoContext must be used within a provider.");
  }
  return context;
};
