import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import {useGetSearchLocation} from '../getSearchLocation';

export const SearchTab = ({value, setValue, loading}) => {
  return (
    <View>
      <Searchbar
        style={styles.search}
        placeholder="Search..."
        onChangeText={setValue}
        value={value}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'white',
  },
});
