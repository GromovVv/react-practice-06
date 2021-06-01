/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line no-unused-vars
// import shortid from 'shortid';

import { createAction } from '@reduxjs/toolkit';

export const fetchTodoRequest = createAction('todos/fetchTodoRequest');
export const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
export const fetchTodoError = createAction('todos/fetchTodoError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');


export const toggleCompletedTodoRequest = createAction('todos/toggleCompletedTodoRequest');
export const toggleCompletedTodoSuccess = createAction('todos/toggleCompletedTodoSuccess');
export const toggleCompletedTodoError = createAction('todos/toggleCompletedTodoError');

export const changeFilter = createAction('todos/changeFilter');


// export default {
//   addTodoRequest,
//   addTodoSuccess,
//   addTodoError,
//   deleteTodo,
//   changeFilter,
//   toggleCompleted,
// };

// const asyncActionCreator = args => dispatch => {
// //http...
// // fetch().then(x => dispatch(action(x))).catch(y => dispatch(action(y)))
// }

// dispatch(asyncActionCreator(10));

// const addTodo = createAction('todos/add', text => ({
//     payload: {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     },
//   }));
