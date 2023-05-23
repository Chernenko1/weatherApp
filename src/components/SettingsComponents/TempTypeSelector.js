import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {setType} from '../../redux/settingsSlice';

export const TempTypeSelector = () => {
  const type = useSelector(state => state.settings.tempType);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const TEMP = [
    {language: t('info:celcius'), code: 'celcius'},
    {language: t('info:fahrenheit'), code: 'fahrenheit'},
  ];

  const setTemptype = param => {
    dispatch(setType({type: param}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={{...styles.text, fontSize: 30, color: 'black'}}>
          {t('languages:TemptypeSelection')}
        </Text>
      </View>
      <FlatList
        data={TEMP}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setTemptype(item.code)}>
            <View style={styles.text_container}>
              <Text
                style={{
                  ...styles.text,
                  color: item.code === type ? '#F1AE89' : 'gray',
                }}>
                {item.language}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 10},
  header_container: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  text_container: {
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 24,
    // paddingBottom: 10,
    color: 'gray',
  },
});
