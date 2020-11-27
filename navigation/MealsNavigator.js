import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: {
        headerStyles: {
            backgroundColor: Colors.accentColor,
        },
        headerTintColor:  Colors.primaryColor,
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Favotites: {screen: FavoritesScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        }
    }} ,
},{
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
    }
}); 


export default createAppContainer(MealsFavTabNavigator);
