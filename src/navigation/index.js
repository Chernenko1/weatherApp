import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {SettingScreen} from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FavouriteScreen} from '../screens/FavouriteScreen';
import {SearchScreen} from '../screens/SearchScreen';

const FavouritesStack = createNativeStackNavigator();

const FavouritesStackScreen = () => {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name="SFavourites"
        component={FavouriteScreen}
        options={{headerShown: false}}
      />
      <FavouritesStack.Screen name="Search" component={SearchScreen} />
    </FavouritesStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'rgba(232, 230, 230, 0.25)'}}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <Icon
                name="home-outline"
                size={20}
                color={!!focused ? color : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesStackScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <Icon
                name="heart-outline"
                size={20}
                color={!!focused ? color : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <Icon
                name="cog-outline"
                size={20}
                color={!!focused ? color : 'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
