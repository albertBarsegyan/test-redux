import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import filmListSlice from './features/filmListSlice';
import toggleSlice from './features/toggleSlice';

export const store = configureStore({
  reducer: { toggle: toggleSlice, count: counterSlice, films: filmListSlice },
});
