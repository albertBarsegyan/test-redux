import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import toggleSlice from './features/toggleSlice';

export const store = configureStore({
  reducer: { toggle: toggleSlice, count: counterSlice },
});
