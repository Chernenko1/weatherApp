import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Weather = () => {
  const data = useSelector(state => state.forecast.dayForecast);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={{fontSize: 24}}>{data.name}</Text>
        <Text style={{fontSize: 72}}>{Math.floor(data.main.temp - 273)}°</Text>
        <Text style={{fontSize: 20}}>{data.weather[0].main}</Text>
      </View>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2584/2584011.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 240,
    width: 240,
    transform: [{scaleX: -1}],
  },
  image_container: {
    position: 'absolute',
    left: width * 0.7,
    top: -20,
  },
  info: {
    marginLeft: 30,
    marginTop: 30,
  },
});
