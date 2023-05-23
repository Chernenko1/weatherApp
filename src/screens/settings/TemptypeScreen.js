import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TempTypeSelector} from '../../components/SettingsComponents/TempTypeSelector';

export const TemptypeScreen = () => {
  return (
    <View style={styles.container}>
      <TempTypeSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
