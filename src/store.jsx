import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import filmListSlice from './features/filmListSlice';
import toggleSlice from './features/toggleSlice';
import logger from './middleware/logger';

export const store = configureStore({
  reducer: { toggle: toggleSlice, count: counterSlice, films: filmListSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
