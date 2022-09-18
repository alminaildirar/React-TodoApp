import axios from "axios";

export const createTodoApi = async (data) => {
  try {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/todos`, {
      content: data,
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getTodosApi = async () => {
  try {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const deleteTodoApi = async (id) => {
  try {
    return await axios.delete(`${process.env.REACT_APP_BASE_URL}/todos/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const updateTodoApi = async (id, todo) => {
  try {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}/todos/${id}`, {
      content: todo,
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const updateCompleteApi = async (id, isCompleted) => {
  try {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}/todos/${id}`, {
      isCompleted,
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
