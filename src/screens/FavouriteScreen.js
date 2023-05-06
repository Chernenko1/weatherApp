import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FakeSearch} from '../components/FavouritesComponents/FakeSearch';
import {Favourite} from '../components/FavouritesComponents/Favourites';

export const FavouriteScreen = () => {
  return (
    <View style={styles.component}>
      <View style={styles.search_component}>
        <FakeSearch />
      </View>
      <View style={styles.favourite_container}>
        <Favourite />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
  search_component: {
    flex: 0.5,
  },
  favourite_container: {
    flex: 2,
  },
});
