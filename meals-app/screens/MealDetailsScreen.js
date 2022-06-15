import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/redux/favorite';
// import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailsScreen({ route, navigation }) {
  // const { favoritesMealIds, addFavorite, removeFavorite } =
  //   useContext(FavoritesContext);

  const favoritesMealIds = useSelector(
    (state) => state.favoriteMeals.favoritesMealIds
  );
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const mealIsFavorite = favoritesMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // removeFavorite(mealId);
      dispatch(removeFavorite(mealId));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Meal Details',
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'heart' : 'heart-outline'}
            color="red"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
