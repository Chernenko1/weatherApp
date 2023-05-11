import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {findBestLanguageTag, getLocales} from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './translations/en';
import ru from './translations/ru';
import be from './translations/be';

const LANGUAGES = {
  en,
  ru,
  be,
};

const LANGUAGE_DETECTOR = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    const userLang = await AsyncStorage.getItem('user_language');
    const deviceLang = userLang || getLocales()[0].languageCode;
    callback(deviceLang);
  },
  cacheUSerLanguage: () => {},
};

i18n.use(LANGUAGE_DETECTOR).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: LANGUAGES,
});

export default i18n;
