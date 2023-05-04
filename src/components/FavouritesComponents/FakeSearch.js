import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export const FakeSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.component}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        activeOpacity={0.8}>
        <View style={styles.search_component}>
          <Text style={{color: 'gray'}}>Search...</Text>
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
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 15,
  },
});
