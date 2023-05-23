import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const width = Dimensions.get('window').width;

export const Settings = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const tempType = useSelector(state => state.settings.tempType);
  console.log(tempType);

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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Temperature')}>
            <Text style={styles.right_text}>{t(`info:${tempType}`)}</Text>
          </TouchableOpacity>
          <Text style={styles.right_text}>{t('info:m/s')}</Text>
          <Text style={styles.right_text}>openweathermap.org</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Language')}>
            <Text style={styles.right_text}>{t('languages:Language')}</Text>
            {/* <Icon name="chevron-right" /> */}
          </TouchableOpacity>
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
