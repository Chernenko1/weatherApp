import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {weatherOption} from '../../data/weatherInfo';
import {daysName} from '../../data/days';

const width = Dimensions.get('screen').width;

export const WeatherWeek = () => {
  // const [weatherDayInfo, setWeatherDayInfo] = useState();
  const data = useSelector(
    state =>
      state.forecast.weekForecast != null && state.forecast.weekForecast.list,
  );

  const weatherDayInfo =
    data !== false
      ? data.filter(date => date.dt_txt.includes('15:00:00'))
      : console.log('ghgh');

  // if (data !== false)
  //   setWeatherDayInfo(data.filter(date => date.dt_txt.includes('15:00:00')));

  if (data == false) return <View></View>;

  return (
    <View>
      <FlatList
        data={weatherDayInfo}
        keyExtractor={item => item.dt_txt}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.day}>
              <Text style={styles.text}>
                {
                  daysName[
                    new Date(
                      item.dt_txt.split(' ')[0].substring(0, 10),
                    ).getDay()
                  ]
                }
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
                {weatherOption[item.weather[0].main].ru}
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
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'black',
    // fontFamily: "Rubik-Light",
    fontSize: 20,
  },
  image: {
    width: 25,
    height: 25,
    transform: [{scaleX: -1}],
  },
  image_container: {
    left: width * 0.48,

    // justifyContent: 'flex-start',
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
