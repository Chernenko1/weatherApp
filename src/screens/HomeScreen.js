import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {Weather} from '../components/Homecomponents/Weather';
import {useGetLocation} from '../components/getLocation';
import {useGetWeather} from '../components/getWeather';
import {WeatherInfo} from '../components/Homecomponents/WeatherInfo';
import {WeatherTimes} from '../components/Homecomponents/WeatherTime';
import {useGetWeekWeather} from '../components/getWeekWeather';
import {WeatherWeek} from '../components/Homecomponents/WeatherWeek';
import {WeatherChart} from '../components/Homecomponents/WeatherChart';

export const HomeScreen = () => {
  const {getLocation} = useGetLocation();
  const {getDayForecast} = useGetWeather();
  const {getWeekForecast} = useGetWeekWeather();

  useEffect(() => {
    getLocation();
    getDayForecast();
    getWeekForecast();
  });

  return (
    <View style={styles.container}>
      <View style={styles.weather_container}>
        <Weather />
      </View>
      <View style={styles.weather_info_container}>
        <WeatherInfo />
      </View>
      <View style={styles.day_length_container}>
        <WeatherChart />
      </View>
      <Text style={{fontSize: 16, marginLeft: 15, color: 'gray'}}>Today</Text>
      <View style={styles.weather_time_container}>
        <WeatherTimes />
      </View>
      <View style={styles.week_weather_container}>
        <WeatherWeek />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weather_container: {
    flex: 4,
    // backgroundColor: '#B9F3FC',
  },
  weather_info_container: {
    flex: 1,
    // backgroundColor: '#AEE2FF',
  },
  day_length_container: {
    flex: 2,
    // backgroundColor: '#93C6E7',
  },
  weather_time_container: {
    flex: 2,
    // backgroundColor: '#FEDEFF',
  },
  week_weather_container: {
    flex: 3,
    // backgroundColor: '#B9F3FC',
  },
});
