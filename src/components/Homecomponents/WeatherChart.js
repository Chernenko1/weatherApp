import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import Svg, {Path} from 'react-native-svg';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;

export const WeatherChart = () => {
  const data = useSelector(state => state.forecast.dayForecast);
  const startDay = data.sys.sunrise;
  const endDay = data.sys.sunset;

  const setTime = t => {
    const unixTime = t;
    const date = new Date(unixTime * 1000); // конвертировать в миллисекунды
    const hours = date.getHours().toString().padStart(2, '0'); // получить часы и дополнить нулями
    const minutes = date.getMinutes().toString().padStart(2, '0'); // получить минуты и дополнить нулями
    return `${hours}:${minutes}`; // склеить часы и минуты в формат HH:MM
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2584/2584042.png',
          }}
          style={{
            ...styles.image,
            left: 29,
            top: 10,
          }}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2584/2584004.png',
          }}
          style={{
            ...styles.image,
            left: width - 80,
            top: 45,
          }}
        />
        <Text style={{...styles.text, left: 60, top: 15}}>
          {setTime(startDay)}
        </Text>
        <Text style={{...styles.text, left: width - 50, top: 50}}>
          {setTime(endDay)}
        </Text>
      </View>
      <Svg height="90" width={width}>
        <Path
          d={`M 0,40 L 80,45 L 300,80 C 320,90 400,80 400,90 L ${width},40`}
          fill="none"
          stroke="green"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {position: 'absolute', fontFamily: 'Lato-Bold'},
  image: {width: 25, height: 25, position: 'absolute'},
});
