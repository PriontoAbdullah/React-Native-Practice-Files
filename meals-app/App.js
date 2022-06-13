import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';

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
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'Meals Categories',
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
            name="MealsCategories"
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
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
