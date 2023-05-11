import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LanguageSelector} from '../components/SettingsComponents/LanguageSelector';

export const LanguageScreen = () => {
  return (
    <View style={styles.container}>
      <LanguageSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
