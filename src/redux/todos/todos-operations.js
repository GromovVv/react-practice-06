/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedTodoRequest,
  toggleCompletedTodoSuccess,
  toggleCompletedTodoError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodo = () => async dispatch => {
  dispatch(fetchTodoRequest());

  try {
    const { data } = await axios.get('/todos');

    dispatch(fetchTodoSuccess(data));
    
  } catch (error) {

    dispatch(fetchTodoError(error));
  }

  //   axios.get('/todos')
  //   .then(({ data }) => dispatch(fetchTodoSuccess(data)))
  //   .catch(error => dispatch(fetchTodoError(error)))
};

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedTodoRequest());

    axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedTodoSuccess(data)))
      .catch(error => dispatch(toggleCompletedTodoError(error)));
  };

export default {
  fetchTodo,
  addTodo,
  deleteTodo,
  toggleCompleted,
};
