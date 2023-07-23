import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

// Import your other reducers here
import user from './reducers/user';
import user2 from './reducers/user2';

// Combine your reducers using combineReducers
const combinedReducers = combineReducers({
  user,
  user2
});

const middleware = [...getDefaultMiddleware(), thunk];
const store = configureStore({
  reducer: combinedReducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;