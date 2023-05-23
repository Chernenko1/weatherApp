import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import locationReducer from './locationSlice';
import forecastReducer from './forecastSlice';
import favouriteReducer from './favouriteSlice';
import settingsReducer from './settingsSlice';

const locationPersistConfig = {
  key: 'location',
  storage: AsyncStorage,
  whitelist: ['longitude', 'latitude'],
};

const forecastPersistConfig = {
  key: 'forecast',
  storage: AsyncStorage,
  whitelist: ['dayForecast', 'weekForecast'],
};

const favouritePersistConfig = {
  key: 'favourite',
  storage: AsyncStorage,
  whitelist: ['favourites'],
};

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  whitelist: ['tempType'],
};

const locationPersistReducer = persistReducer(
  locationPersistConfig,
  locationReducer,
);

const forecastPersistReducer = persistReducer(
  forecastPersistConfig,
  forecastReducer,
);

const favouritePersistReducer = persistReducer(
  favouritePersistConfig,
  favouriteReducer,
);

const settingsPersistReducer = persistReducer(
  settingsPersistConfig,
  settingsReducer,
);

const reducers = combineReducers({
  location: locationPersistReducer,
  forecast: forecastPersistReducer,
  favourite: favouritePersistReducer,
  settings: settingsPersistReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
