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
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import todosReducer from '../redux/todos/todos-reducer';
import counterReducer from './counter/counter-reducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;

// eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };

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
        // console.log(getDefaultMiddleware());
        
        // const myMiddleware = store => next => action => {
        //   // our action
        // }
        
        // function myMiddleware(store) {
        //   return function (next) {
        //     return function (action) {
        //       // return body
        //     }
        //   }
        // }
        
        // const myMiddleware = store => next => action => {
        //   // our action
        //   console.log('My middleware', action);
        
        //   next(action)
        // }
        
        // const gaMD = store => next => action => {
        //   console.log('My middleware', action);
        
        //   // if(action.meta && action.meta.ga)
        //   if(action?.meta?.ga) {
        //     console.log('push analitics');
        //   }
        
        //   next(action)
        // }
        
        // const atcionGaMD = {
        //     type: "todo/add",
        //     payload: 'Yo bro',
        //     met: {
        //       ga: true,
        //     }
        // }
