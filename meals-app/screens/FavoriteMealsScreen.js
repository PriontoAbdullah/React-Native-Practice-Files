import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  // const { favoritesMealIds } = useContext(FavoritesContext);
  const favoritesMealIds = useSelector(
    (state) => state.favoriteMeals.favoritesMealIds
  );

  const favoriteMeals = MEALS?.filter((meal) =>
    favoritesMealIds?.includes(meal.id)
  );

  if (favoriteMeals?.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f2f25',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
