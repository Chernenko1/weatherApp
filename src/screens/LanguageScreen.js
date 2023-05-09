import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';

export const LanguageScreen = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={{...styles.text, fontSize: 30}}>
          {t('languages:LanguageSelection')}
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text
          style={{...styles.text, color: 'gray'}}
          onPress={() => i18n.changeLanguage('en')}>
          English
        </Text>
        <Text
          style={{...styles.text, color: '#F1AE89'}}
          onPress={() => i18n.changeLanguage('ru')}>
          Русский
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 10},
  header_container: {
    marginTop: 10,
    alignItems: 'center',
  },
  text_container: {
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
  },
  text: {fontFamily: 'Lato-Regular', fontSize: 24, paddingBottom: 10},
});
