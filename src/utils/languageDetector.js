import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetector = {
  type: 'lauguageDetector',
  async: true,
  init : () => {},
  detect: callback => {
    try {
     await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
      if(language) {
        return callback(language)
      } else {
        return callback(L)
      }
     })
      
    } catch (error) {
      
    }
  }
}