import React from 'react';
import {View, StyleSheet, Image, Dimensions, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {weatherOption} from '../../data/weatherInfo';

let len = 0;
console.log(len);

export const WeatherTimes = () => {
  const date = new Date().toISOString().substring(0, 10);
  const data = useSelector(state => state.forecast.weekForecast.list);

  const weatherDayInfo = data.filter(dat => dat.dt_txt.includes(date));
  len = weatherDayInfo.length;
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
    marginLeft: len <= 2 && len != 0 ? 70 : len == 0 ? 150 : 0,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  image: {
    height: 35,
    width: 35,
    transform: [{scaleX: -1}],
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
  },
});
