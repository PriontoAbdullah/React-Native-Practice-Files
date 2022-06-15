import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesMealIds: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const { mealId } = action.payload;
      state.favoritesMealIds.push(mealId);
    },
    removeFavorite: (state, action) => {
      const { mealId } = action.payload;
      state.favoritesMealIds = state.favoritesMealIds.filter(
        (id) => id !== mealId
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
