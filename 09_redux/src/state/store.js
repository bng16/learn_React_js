import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/Counter';  // Import counterSlice reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Use counterReducer instead of counterSlice
  },
});
