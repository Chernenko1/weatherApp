import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';

export const LanguageSelector = () => {
  const [lang, setLang] = useState(null);
  const LANGUAGES = [
    {language: 'English', code: 'en'},
    {language: 'Русский', code: 'ru'},
    {language: 'Белорусский', code: 'be'},
  ];

  const {t} = useTranslation();

  const deviceLang = async () => {
    const a = await AsyncStorage.getItem('user_language');
    setLang(a);
  };
  console.log(lang);
  useEffect(() => {
    deviceLang();
  }, []);

  const selectLanguage = lng => {
    AsyncStorage.setItem('user_language', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={{...styles.text, fontSize: 30, color: 'black'}}>
          {t('languages:LanguageSelection')}
        </Text>
      </View>
      <FlatList
        data={LANGUAGES}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => selectLanguage(item.code)}>
            <View style={styles.text_container}>
              <Text
                style={{
                  ...styles.text,
                  color: item.code === lang ? '#F1AE89' : 'gray',
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
