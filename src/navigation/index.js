import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

import {HomeScreen} from '../screens/HomeScreen';
import {SettingScreen} from '../screens/SettingScreen';
import {FavouriteScreen} from '../screens/FavouriteScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {LanguageScreen} from '../screens/LanguageScreen';

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

const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SSettings"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'rgba(232, 230, 230, 0.25)'}}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={t('navigate:Home')}
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
        name={t('navigate:Favourites')}
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
        name={t('navigate:Settings')}
        component={SettingsStackScreen}
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
