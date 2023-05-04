import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SearchTab} from '../components/SearchComponents/SearchTab';
import {SearchResponse} from '../components/SearchComponents/SearchResponse';
import {useGetSearchLocation} from '../components/getSearchLocation';

export const SearchScreen = () => {
  const [value, setValue] = useState('');

  const {data, loading} = useGetSearchLocation({query: value});

  return (
    <View style={styles.component}>
      <View style={styles.searchBar_component}>
        <SearchTab value={value} setValue={setValue} loading={loading} />
      </View>
      <View style={styles.response_container}>
        <SearchResponse data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 15,
  },
  searchBar_component: {},
  response_container: {
    flex: 1,
    marginTop: 10,
  },
});
