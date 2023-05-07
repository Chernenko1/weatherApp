import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
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
  const [refreshing, setRefreshing] = useState(false);

  const {getLocation} = useGetLocation();
  const {getDayForecast} = useGetWeather();
  const {getWeekForecast} = useGetWeekWeather();

  const onRefresh = () => {
    setRefreshing(true);
    getLocation();
    setRefreshing(false);
  };

  useEffect(() => {
    getDayForecast();
    getWeekForecast();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.weather_container}>
          <Weather />
        </View>
        <View style={styles.weather_info_container}>
          <WeatherInfo />
        </View>
        <View style={styles.day_length_container}>
          <WeatherChart />
        </View>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 15,
            color: 'gray',
            fontFamily: 'Rubik-Light',
          }}>
          Today
        </Text>
        <View style={styles.weather_time_container}>
          <WeatherTimes />
        </View>
        <View style={styles.week_weather_container}>
          <WeatherWeek />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weather_container: {},
  weather_info_container: {
    marginTop: 10,
    marginBottom: 5,
    paddingVertical: 10,
  },
  day_length_container: {
    marginBottom: 10,
  },
  weather_time_container: {},
  week_weather_container: {},
});
