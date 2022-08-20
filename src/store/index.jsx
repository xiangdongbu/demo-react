import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../pages/main/mainSlice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
