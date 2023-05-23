import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeFavourite, setFavourites} from '../../redux/favouriteSlice';
import {useMarked} from '../../hooks/use-marked';
import {weatherOption} from '../../data/weatherInfo';
import settings from '../../constants/settings/settings';

const width = Dimensions.get('screen').width;

export const Weather = () => {
  const {t} = useTranslation();
  const data = useSelector(state => state.forecast.dayForecast);
  const tempType = useSelector(state => state.settings.tempType);

  let name = data;

  name !== null ? (name = data.name) : (name = 0);

  const mark = useMarked(name);

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

  if (data == null)
    return (
      <View>
        <ActivityIndicator animating={true} color="red" />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 24, left: 3, fontFamily: 'Lato-Regular'}}>
            {data.name}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsFavourite()}>
            <Icon
              name={mark ? 'star' : 'star-outline'}
              size={22}
              color="black"
              style={{top: 1.5, left: 8.5}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 72, fontFamily: 'Lato-Regular'}}>
          {Math.floor(settings[tempType](data.main.temp))}°
        </Text>
        <Text style={styles.weather_text}>
          {t(`weather:${data.weather[0].main}`)}
        </Text>
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
    fontFamily: 'Lato-Regular',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: 'rgba(189, 181, 181, 0.15)',
    borderRadius: 20,
  },
});
