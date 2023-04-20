import React, {useState} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {GetLocation} from '../components/getLocation';
import {Weather} from '../components/getWeather';

export const HomeScreen = () => {
  return (
    <View>
      <GetLocation />
      <Weather />
    </View>
  );
};
