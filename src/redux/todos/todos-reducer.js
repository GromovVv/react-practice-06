import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './todos-actions'
// import todosTypes from './todos-types';

// console.log(actions.addTodo.type);

const items = createReducer([], {
  [actions.addTodo]: (state, action) => [...state, action.payload],
  [actions.deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload),
  [actions.toggleCompleted]: (state, { payload }) => state.map(todo =>
    todo.id === payload ? {...todo, completed: !todo.completed} : todo,
  ),
  
  // 'todos/add': (state, action) => [...state, action.payload],
  // 'todos/delete': (state, action) => state.filter(todo => todo.id !== action.payload),

  // [todosTypes.ADD]: (state, action) => [...state, action.payload],
  // [todosTypes.DELETE]: (state, action) => state.filter(todo => todo.id !== action.payload)
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
})

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case todosTypes.ADD:
//      return [...state, payload];

//     case todosTypes.DELETE:
//         return state.filter(todo => todo.id !== payload)

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'todos/changeFilter':
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
