import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import locationReducer from './locationSlice';
import forecastReducer from './forecastSlice';

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

const locationPersistReducer = persistReducer(
  locationPersistConfig,
  locationReducer,
);

const forecastPersistReducer = persistReducer(
  forecastPersistConfig,
  forecastReducer,
);

const reducers = combineReducers({
  location: locationPersistReducer,
  forecast: forecastPersistReducer,
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
