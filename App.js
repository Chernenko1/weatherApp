import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppNavigator} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux';
import {Provider} from 'react-redux';

export const App = () => {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </PersistGate>
  );
};
