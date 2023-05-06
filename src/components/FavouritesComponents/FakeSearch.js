import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const FakeSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.component}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        activeOpacity={0.8}>
        <View style={styles.search_component}>
          <Icon name="magnify" size={22} color="black" />
          <Text style={styles.text}>Search...</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 15,
  },
  search_component: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 15,
  },
  text: {
    left: 10,
    color: 'black',
    fontSize: 16,
  },
});
