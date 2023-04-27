import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.component}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search_component}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginTop: 40,
    marginHorizontal: 15,
  },
  search_component: {
    backgroundColor: 'white',
  },
});
