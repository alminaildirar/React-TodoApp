import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateCompleteApi,
  updateTodoApi,
} from "../api/api";
import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  CREATE_TODO_BEGIN,
  CREATE_TODO_ERROR_,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_BEGIN,
  UPDATE_TODO_BEGIN,
  UPDATE_TODO_SUCCESS,
  CREATE_USER_BEGIN,
} from "./actions";
import reducer from "./reducer";

const user = localStorage.getItem("user");

const TodoContext = createContext();

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  todos: [],
  user: user ? user : "",
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const createUser = async (username) => {
    dispatch({ type: CREATE_USER_BEGIN });
    try {
      localStorage.setItem("user", username.toString());
      navigate("/");
    } catch {
      console.log("error");
    }
  };

  const createTodo = async (todo) => {
    dispatch({ type: CREATE_TODO_BEGIN });
    try {
      await createTodoApi(todo);
      dispatch({
        type: CREATE_TODO_SUCCESS,
      });
      getTodos();
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
      await deleteTodoApi(id);
      getTodos();
    } catch (error) {
      // dispatch({
      //   type: CREATE_TODO_ERROR_,
      //   payload: { msg: error.response.data.msg },
      // });
    }
    //clearAlert();
  };

  const updateTodo = async (id, todo) => {
    dispatch({ type: UPDATE_TODO_BEGIN });
    try {
      const res = await updateTodoApi(id, todo);
      console.log("res", res);
      getTodos();
    } catch (error) {
      // dispatch({
      //   type: CREATE_TODO_ERROR_,
      //   payload: { msg: error.response.data.msg },
      // });
    }
    //clearAlert();
  };

  const updateComplete = async (id, isCompleted) => {
    dispatch({ type: UPDATE_TODO_BEGIN });
    try {
      await updateCompleteApi(id, isCompleted);
      getTodos();
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
    updateTodo,
    createUser,
    updateComplete,
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
