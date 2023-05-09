import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import en from './translations/en';
import ru from './translations/ru';

const LANGUAGES = {
  en,
  ru,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: LANGUAGES,
});

export default i18n;
