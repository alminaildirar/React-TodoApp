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
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/todos/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
