import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

export const UserLocation = () => {
  const city = useSelector(state => state.forecast.dayForecast.name);
  const country = useSelector(state => state.forecast.dayForecast.sys.country);

  return (
    <View style={styles.container}>
      <View style={styles.yrln_container}>
        <Icon name="crosshairs-gps" size={20} />
        <Text style={styles.yrln_text}>Your location Now</Text>
      </View>
      <View style={styles.location_container}>
        <Text style={styles.location_text}>
          {city}, {country}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yrln_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23,
  },
  yrln_text: {
    marginLeft: 5,
    fontSize: 15,
    color: 'gray',
  },
  location_container: {
    marginTop: 5,
    marginLeft: 5,
    alignItems: 'center',
  },
  location_text: {
    fontSize: 20,
  },
});
