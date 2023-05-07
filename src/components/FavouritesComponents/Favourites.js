import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {weatherOption} from '../../data/weatherInfo';
import {setCoords} from '../../redux/locationSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Favourite = () => {
  const data = useSelector(state => state.favourite.favourites);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setLocation = (lan, lon) => {
    console.log(lan, lon);
    dispatch(setCoords({latitude: lan, longitude: lon}));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        numColumns={2}
        horizontal={false}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setLocation(item.lat, item.lon)}>
            <View style={styles.favourite_blocks}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 50}}>
                  {Math.floor(item.temp - 273)}°
                </Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: weatherOption[item.weather].iconName,
                  }}
                />
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={{left: 2, marginBottom: 4}}>{item.name}</Text>
                <Text style={{left: 2, color: 'gray'}}>{item.country}</Text>
              </View>
              <View style={styles.info_container}>
                <View style={styles.info_blocks}>
                  <Icon name="water-outline" size={24} />
                  <Text style={styles.text}>{item.humidity}%</Text>
                </View>
                <View style={{...styles.info_blocks, left: 35}}>
                  <Icon name="weather-windy" size={24} />
                  <Text style={styles.text}>{item.wind_speed}m/s</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  favourite_blocks: {
    width: 180,
    height: 190,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  info_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  info_blocks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    transform: [{scaleX: -1}],
    position: 'absolute',
    left: 95,
  },
});
