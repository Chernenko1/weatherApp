import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {weatherOption} from '../../data/weatherInfo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeFavourite, setFavourites} from '../../redux/favouriteSlice';
import {useMarked} from '../../hooks/use-marked';

const width = Dimensions.get('screen').width;

export const Weather = () => {
  const data = useSelector(state => state.forecast.dayForecast);

  const mark = useMarked(data.name);

  const dispatch = useDispatch();

  const setIsFavourite = () => {
    mark
      ? dispatch(removeFavourite({name: data.name}))
      : dispatch(
          setFavourites({
            lat: data.coord.lat,
            lon: data.coord.lon,
            name: data.name,
            temp: data.main.temp,
            weather: data.weather[0].main,
            country: data.sys.country,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
          }),
        );
  };

  if (data == null) return <View></View>;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 24, right: 5}}>{data.name}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsFavourite()}>
            <Icon
              name={mark ? 'star' : 'star-outline'}
              size={22}
              color="black"
              style={{top: 1.5}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 72}}>{Math.floor(data.main.temp - 273)}°</Text>
        <Text style={styles.weather_text}>{data.weather[0].main}</Text>
      </View>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: weatherOption[data.weather[0].main].iconName,
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
  weather_text: {
    fontSize: 24,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: 'rgba(189, 181, 181, 0.15)',
    borderRadius: 20,
  },
});
