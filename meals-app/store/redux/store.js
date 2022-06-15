import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
