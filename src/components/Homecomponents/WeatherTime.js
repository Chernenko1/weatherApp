import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions, FlatList} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {weatherOption} from '../../data/weatherInfo';

export const WeatherTimes = () => {
  // const [weatherDayInfo, setWeatherDayInfo] = useState();
  const date = new Date().toISOString().substring(0, 10);

  const data = useSelector(
    state =>
      state.forecast.weekForecast != null && state.forecast.weekForecast.list,
  );

  const weatherDayInfo =
    data !== false
      ? data.filter(dat => dat.dt_txt.includes(date))
      : console.log('Error(WeatherTime)');

  if (data == false)
    return (
      <View>
        <ActivityIndicator animating={true} color="red" />
      </View>
    );

  return (
    <View>
      <FlatList
        data={weatherDayInfo}
        keyExtractor={weatherDayInfo.dt_txt}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text
              style={{
                ...styles.text,
                fontSize: 15,
              }}>
              {item.dt_txt.split(' ')[1].substring(0, 5)}
            </Text>
            <Image
              style={styles.image}
              source={{uri: weatherOption[item.weather[0].main].iconName}}
            />
            <Text style={styles.text}>{Math.floor(item.main.temp - 273)}°</Text>
          </View>
        )}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 35,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  image: {
    height: 35,
    width: 35,
    left: 5,
    transform: [{scaleX: -1}],
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    marginLeft: 10,
  },
});
