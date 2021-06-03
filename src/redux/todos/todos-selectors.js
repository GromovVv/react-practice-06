/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  },
);


const getCompeltedTodosCount = createSelector([getAllTodos], (todos => {
    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
}))

const getClicks = state => state.counter.value;

export default {
    getLoading,
    getFilter,
    getAllTodos,
    getTotalTodoCount,
    getVisibleTodos,
    getCompeltedTodosCount,
    getClicks,
}
