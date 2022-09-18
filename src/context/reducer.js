import {
  CREATE_USER_BEGIN,
  CREATE_USER_SUCCESS,
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  CREATE_TODO_BEGIN,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  UPDATE_TODO_BEGIN,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  DELETE_TODO_BEGIN,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  // if (action.type === DISPLAY_ALERT) {
  //   return {
  //     ...state,
  //     showAlert: true,
  //     alertType: 'danger',
  //     alertText: 'Please provide all values!',
  //   }
  // }
  // if (action.type === CLEAR_ALERT) {
  //   return {
  //     ...state,
  //     showAlert: false,
  //     alertType: '',
  //     alertText: '',
  //   }
  // }

  if (action.type === CREATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
    };
  }

  if (action.type === CREATE_TODO_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_TODO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === CREATE_TODO_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_TODOS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_TODOS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      todos: action.payload.todos,
    };
  }
  if (action.type === DELETE_TODO_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_TODO_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_TODO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
