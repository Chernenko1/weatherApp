import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const WeatherInfo = () => {
  const data = useSelector(state => state.forecast.dayForecast);
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <View style={styles.info_blocks}>
          <Icon name="water" size={24} />
          <Text style={styles.text}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.info_blocks}>
          <Icon name="water" size={24} />
          <Text style={styles.text}>
            {Math.floor(data.main.pressure * 0.75)}mmHg
          </Text>
        </View>
        <View style={styles.info_blocks}>
          <Icon name="water" size={24} />
          <Text style={styles.text}>{data.wind.speed}m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  info_blocks: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
});