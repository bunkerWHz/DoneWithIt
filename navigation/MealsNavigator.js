import { createAppContainer } from 'react-navigation';
import React from 'react';
import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
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
const tabScreenConfig = {
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
};

const MealsFavTabNavigator = 
Platform.OS === 'android' 
? createMaterialBottomTabNavigator (tabScreenConfig, {
    activeColor: Colors.accentColor,
    barStyle: {
        backgroundColor: Colors.primaryColor
    }
}) 
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
    }
}); 


export default createAppContainer(MealsFavTabNavigator);
