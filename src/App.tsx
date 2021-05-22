import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';

import { MainRoutes } from './routes';
import AppProvider from './context';

const App: React.FC = () => {
  useEffect(() => {
    OneSignal.setAppId('86f85145-ca1d-4464-8efa-4076daf57a20');
    OneSignal.setNotificationOpenedHandler(data =>
      console.log(data.notification),
    );

    return () => {
      OneSignal.clearHandlers();
    };
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FF92B9" />
      <AppProvider>
        <MainRoutes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
