import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const WeatherInfo = () => {
  const data = useSelector(state => state.forecast.dayForecast);
  const {t} = useTranslation();

  if (data == null)
    return (
      <View>
        <ActivityIndicator animating={true} color="red" />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <View style={styles.info_blocks}>
          <Icon name="water-outline" size={24} />
          <Text style={styles.text}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.info_blocks}>
          <Icon name="clock-time-twelve-outline" size={24} />
          <Text style={styles.text}>
            {Math.floor(data.main.pressure * 0.75)}
            {t(`info:mmHg`)}
          </Text>
        </View>
        <View style={styles.info_blocks}>
          <Icon name="weather-windy" size={24} />
          <Text style={styles.text}>
            {data.wind.speed}
            {t('info:m/s')}
          </Text>
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
    marginTop: 15,
  },
  info_blocks: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    marginLeft: 10,
  },
});
