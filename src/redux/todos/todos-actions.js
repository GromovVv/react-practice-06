/* eslint-disable import/no-anonymous-default-export */
import shortid from 'shortid';

import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line no-unused-vars
// import typesTodo from './todos-types';

// const addTodo = createAction(typesTodo.ADD, text => ({

const addTodo = createAction('todos/add', text => ({
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  }));

  
  const deleteTodo = createAction('todos/delete');
  
  const changeFilter = createAction('todos/changeFilter');

  const toggleCompleted = createAction('todos/toggleCompleted');


  // const deleteTodo = createAction(typesTodo.DELETE);
  // const changeFilter = createAction(typesTodo.CHANGE_FILTER);

// const addTodo = (text) => ({
//     type: typesTodo.ADD,
//     payload: {
//         id: shortid.generate(),
//         text,
//         completed: false,
//     }
// });

// const deleteTodo = todoId => ({
//     type: typesTodo.DELETE,
//     payload: todoId
// })

// const changeFilter = value => ({
//     type: typesTodo.CHANGE_FILTER,
//     payload: value,
// })

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
