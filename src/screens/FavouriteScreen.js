import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FakeSearch} from '../components/FavouritesComponents/FakeSearch';

export const FavouriteScreen = () => {
  return (
    <View style={styles.component}>
      <View style={styles.search_component}>
        <FakeSearch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
  search_component: {
    flex: 1,
  },
});
