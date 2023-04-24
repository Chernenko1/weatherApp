import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {UserLocation} from '../components/SettingsComponents/UserLocation';
import {WeatherOnSettings} from '../components/SettingsComponents/WeatherInSettings';
import {WeatherInfo} from '../components/Homecomponents/WeatherInfo';
import {Settings} from '../components/SettingsComponents/Settings';

export const SettingScreen = () => {
  return (
    <View style={styles.component}>
      <View style={styles.location_component}>
        <UserLocation />
      </View>
      <View style={styles.weather_componet}>
        <WeatherOnSettings />
      </View>
      <View style={styles.weather_info_container}>
        <WeatherInfo />
      </View>
      <View style={styles.setting_component}>
        <Settings />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
  location_component: {
    flex: 1,
  },
  weather_info_container: {
    flex: 0.5,
  },
  weather_componet: {
    flex: 3,
  },
  setting_component: {
    flex: 2,
  },
});
