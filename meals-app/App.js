import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoriteMealsScreen from './screens/FavoriteMealsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import UserScreen from './screens/UserScreen';
import { store } from './store/redux/store';
// import FavoritesContextProvider from './store/context/favorites-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="MealsCategories"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#F9C23C',
        tabBarStyle: { backgroundColor: '#351401' },
        contentStyle: {
          backgroundColor: '#3f2f25',
        },
      }}
    >
      <Tab.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'Meals Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteMealsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401',
                borderBottomWidth: 0,
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}
          >
            <Stack.Screen
              name="MealsComponents"
              component={TabComponent}
              options={{
                title: 'Meals Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                headerRight: () => {
                  return (
                    <View style={{ marginRight: 10 }}>
                      <Text style={{ color: '#fff', fontSize: 20 }}>
                        {'\u2B50'}
                      </Text>
                    </View>
                  );
                },
              }}
            />
            <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
