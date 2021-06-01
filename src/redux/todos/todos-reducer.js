import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

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
  changeFilter,
} from './todos-actions';


const items = createReducer([], {
  [fetchTodoSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  [toggleCompletedTodoSuccess]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload.id ? payload : todo,
    ),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});


const loading = createReducer(false, {
  [fetchTodoRequest]: () => true,
  [fetchTodoSuccess]: () => false,
  [fetchTodoError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [toggleCompletedTodoRequest]: () => true,
  [toggleCompletedTodoSuccess]: () => false,
  [toggleCompletedTodoError]: () => false,

})

const error = createReducer(null, {})

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
