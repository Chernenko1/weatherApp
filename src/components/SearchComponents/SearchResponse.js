import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setCoords} from '../../redux/locationSlice';

export const SearchResponse = ({data}) => {
  // const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const setLocation = (lan, lon) => {
    dispatch(setCoords({latitude: lan, longitude: lon}));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.response_container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setLocation(item.geo_lat, item.geo_lon)}>
              <View style={styles.blocks}>
                <Text style={styles.text}>
                  {item.city_with_type == null
                    ? item.settlement_with_type
                    : item.city_with_type + ', ' + item.region_with_type}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  response_container: {},
  blocks: {
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingLeft: 10,
    left: 15,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 15,
  },
});
