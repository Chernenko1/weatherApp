import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {Weather} from '../components/Homecomponents/Weather';
import {GetWeather} from '../components/getWeather';
import {GetLocation} from '../components/getLocation';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <GetLocation />
      <GetWeather />
      <View style={styles.weather_container}>
        <Weather />
      </View>
      <View style={styles.weather_info_container}></View>
      <View style={styles.day_length_container}></View>
      <View style={styles.weather_time_container}></View>
      <View style={styles.week_weather_container}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weather_container: {
    flex: 4,
    backgroundColor: '#B9F3FC',
  },
  weather_info_container: {
    flex: 1,
    backgroundColor: '#AEE2FF',
  },
  day_length_container: {
    flex: 2,
    backgroundColor: '#93C6E7',
  },
  weather_time_container: {
    flex: 2,
    backgroundColor: '#FEDEFF',
  },
  week_weather_container: {
    flex: 3,
    backgroundColor: '#B9F3FC',
  },
});
