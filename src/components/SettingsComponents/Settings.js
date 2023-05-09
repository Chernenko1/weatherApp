import React from 'react';
import {View, StyleSheet, Dimensions, Pressable} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

export const Settings = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <View style={styles.left_text_container}>
          <Text style={styles.left_text}>{t('settings:Temperature')}</Text>
          <Text style={styles.left_text}>{t('settings:WindSpeed')}</Text>
          <Text style={styles.left_text}>{t('settings:Source')}</Text>
          <Text style={styles.left_text}>{t('settings:Language')}</Text>
        </View>
        <View style={styles.right_text_container}>
          <Text style={styles.right_text}>{t('info:Celcius')}</Text>
          <Text style={styles.right_text}>{t('info:m/s')}</Text>
          <Text style={styles.right_text}>openweathermap.org</Text>

          <Text
            style={styles.right_text}
            onPress={() => navigation.navigate('Language')}>
            {t('languages:Language')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  text_container: {
    flexDirection: 'row',
  },
  left_text_container: {
    marginLeft: 30,
  },
  right_text_container: {
    position: 'absolute',
    left: width * 0.505,
    marginTop: 3,
  },
  right_text: {
    marginTop: 15,
    left: 30,
    textAlign: 'right',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: 'gray',
  },
  left_text: {
    textAlign: 'left',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    marginTop: 15,
  },
});
