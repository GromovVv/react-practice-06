/* eslint-disable no-unused-vars */
// import { combineReducers } from 'redux';
// eslint-disable-next-line no-unused-vars
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todosReducer from '../redux/todos/todos-reducer';
import counterReducer from './counter/counter-reducer';

// console.log(getDefaultMiddleware());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const rootReducer = combineReducers({
//   counter: persistReducer(persistConfig, counterReducer),
//   todos: persistReducer(persistConfig, todosReducer),
// });
const counterPersistConfig = {
  key: 'Counter',
  storage,
  blacklist: ['filter'],
};
const todosPersistConfig = {
  key: 'Todos',
  storage,
};


const store = configureStore({
  reducer: {
    counter: persistReducer(counterPersistConfig, counterReducer),
    todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// const initialState = {
//   counter: {
//     value: 10,
//     step: 5,
//   },
// };

// const reducer = (state = initialState, action) => {

// const reducer = (state = initialState, { type, payload }) => {
//   // console.log("Log of action", action);
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };

//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.conter,
//           value: state.counter.value - payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// const counterInitialState = {
//   value: 10,
//   step: 5,
// };

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;

//     case 'counter/Decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });
