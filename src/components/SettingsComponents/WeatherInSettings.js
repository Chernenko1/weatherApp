import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {weatherOption} from '../../data/weatherInfo';

export const WeatherOnSettings = () => {
  const data = useSelector(state => state.forecast.dayForecast);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: weatherOption[data.weather[0].main].iconName,
          }}
        />
        <Text style={styles.weather_text}>{data.weather[0].main}</Text>
        <Text style={styles.temp_text}>
          {Math.floor(data.main.temp - 273)}°
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
  },
  weather_text: {
    fontSize: 22,
    fontFamily: 'Lato-Regular',
    marginLeft: 45,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: 'rgba(189, 181, 181, 0.15)',
    borderRadius: 20,
  },
  temp_text: {
    fontSize: 72,
    marginLeft: 40,
    fontFamily: 'Lato-Regular',
  },
});
