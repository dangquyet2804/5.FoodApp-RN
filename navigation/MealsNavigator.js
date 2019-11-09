import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createNavigator } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import {MaterialIcons} from '@expo/vector-icons'

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen'
    }
  }
);
const FavNavigator = createStackNavigator({
    Favarites: FavoritesScreen,
    MailDetal: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
      }
})
const MealfavTabNavigator = createBottomTabNavigator({
     Meals: { screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
          return <MaterialIcons name='restaurant' size={25} color={tabInfo.tintColor}/>
      }
    }
  },
    Favarites: { screen: FavNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return <MaterialIcons name='favorite' size={25} color={tabInfo.tintColor}/>
    }
  }
},
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
  }
})
const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
      }
})
const MainNavigator = createDrawerNavigator({
    MealsFavs: MealfavTabNavigator,
    Filters: FilterNavigator
})
export default createAppContainer(MainNavigator);
