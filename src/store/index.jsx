import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../pages/main/mainSlice';

// test
export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
