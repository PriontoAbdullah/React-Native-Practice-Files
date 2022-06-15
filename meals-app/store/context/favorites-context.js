import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  favoritesMealIds: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoritesMealIds((prevFavoritesIds) => [...prevFavoritesIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesMealIds((prevFavoritesIds) =>
      prevFavoritesIds.filter((mealId) => mealId !== id)
    );
  };

  const contextData = {
    favoritesMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextData}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
