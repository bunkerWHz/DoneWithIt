import { createAppContainer } from 'react-navigation';
import React from 'react';
import {Platform, useWindowDimensionsm, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import Colors from '../constants/colors';

const defaultStackNavOprions = {
    headerStyles: {
        backgroundColor: Colors.accentColor,
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor:  Colors.primaryColor,
    headerTitle: 'A Screen'
};
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOprions,
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOprions
});


const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        },
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    }},
    Favotites: {
        screen: FavNavigator, 
        navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        },
        tabBarLabel: Platform.OS === 'android' ? <Text>Favorites</Text> : 'Favorites'
    }} ,
};

const MealsFavTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator (tabScreenConfig, {
    activeColor: Colors.accentColor,
    barStyle: {
        backgroundColor: Colors.primaryColor
    }
}) 
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor,
    }
}); 

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filter'
    },
    defaultNavigationOptions: defaultStackNavOprions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
},
{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator);
