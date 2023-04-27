import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useGetSearchLocation} from '../components/getSearchLocation';
import {Search} from '../components/FavouritesComponents/Search';

export const FavouriteScreen = () => {
  const {getPlaceLocation} = useGetSearchLocation();

  getPlaceLocation();
  return (
    <View style={styles.component}>
      <View style={styles.search_component}>
        <Search />
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
