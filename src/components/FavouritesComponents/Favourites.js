import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

export const Favourite = () => {
  const data = useSelector(state => state.favourite.favourites);
  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.favourite_container}>
        <View style={styles.favourite_blocks}>
          <Text>1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favourite_container: {
    flex: 1,
  },
  favourite_blocks: {
    backgroundColor: 'white',
  },
});
