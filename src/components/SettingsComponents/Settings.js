import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

const width = Dimensions.get('window').width;

export const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <View style={styles.left_text_container}>
          <Text style={styles.left_text}>Temperature</Text>
          <Text style={styles.left_text}>Wind Speed</Text>
          <Text style={styles.left_text}>Source</Text>
        </View>
        <View style={styles.right_text_container}>
          <Text style={styles.right_text}>Celcius</Text>
          <Text style={styles.right_text}>m/s</Text>
          <Text style={styles.right_text}>openweathermap.org</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  text_container: {
    flexDirection: 'row',
  },
  left_text_container: {
    marginLeft: 30,
  },
  right_text_container: {
    position: 'absolute',
    left: width * 0.505,
    marginTop: 3,
  },
  right_text: {
    marginTop: 15,
    textAlign: 'right',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: 'gray',
  },
  left_text: {
    textAlign: 'left',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    marginTop: 15,
  },
});
