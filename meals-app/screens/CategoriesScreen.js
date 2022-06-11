import { FlatList } from 'react-native';
import CategoryGridTail from '../components/CategoryGridTail';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTail
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
