import axios from "axios";
import { config } from "../config";

const url = config.api.url;

export const getTodos = async () => {
    const response = await axios.get(`${url}/todos`)
    return response.data;
}

export const addTodo = async (todo) => {
    const response = await axios.post(`${url}/todos`, {content: todo})
    //console.log(response)
}

export const updateTodo = async (id, content, isCompleted) => {
    const response = await axios.put(`${url}/todos/${id}`, {content: content, isCompleted, id})
    //console.log(response)
}

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${url}/todos/${id}`)
    //console.log(response)
}

