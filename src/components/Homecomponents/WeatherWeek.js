import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {weatherOption} from '../../data/weatherInfo';

const width = Dimensions.get('screen').width;

export const WeatherWeek = () => {
  const data = useSelector(
    state =>
      state.forecast.weekForecast != null && state.forecast.weekForecast.list,
  );
  const {t} = useTranslation();
  const navigation = useNavigation();

  const weatherDayInfo =
    data !== false
      ? data.filter(date => date.dt_txt.includes('15:00:00'))
      : console.log('Error(WeatherWeek)');

  if (data == false)
    return (
      <View>
        <ActivityIndicator animating={true} color="red" />
      </View>
    );

  return (
    <View style={{marginTop: 12}}>
      {weatherDayInfo.map((item, index) => (
        <View style={styles.container}>
          <View style={styles.day}>
            <Text style={styles.text}>
              {t(
                `days:${new Date(
                  item.dt_txt.split(' ')[0].substring(0, 10),
                ).getDay()}`,
              )}
            </Text>
          </View>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{uri: weatherOption[item.weather[0].main].iconName}}
            />
          </View>

          <View style={styles.weather_info}>
            <Text
              style={{
                ...styles.text,
                fontSize: 15,
                marginBottom: 7,
              }}>
              {t(`weather:${item.weather[0].main}`)}
            </Text>
          </View>

          <View style={styles.weather_deg}>
            <Text style={{...styles.text, fontSize: 15, marginLeft: 15}}>
              {item.main.temp > 273
                ? `+${Math.floor(item.main.temp - 273)}`
                : Math.floor(item.main.temp - 273)}
              °
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  image: {
    width: 25,
    height: 25,
    transform: [{scaleX: -1}],
  },
  image_container: {
    left: width * 0.48,
  },
  day: {
    position: 'absolute',
    left: width * 0.05,
  },
  weather_info: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    left: width * 0.65,
  },
  weather_deg: {
    position: 'absolute',
    left: width * 0.85,
  },
});
