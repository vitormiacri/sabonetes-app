import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';

import { MainRoutes } from './routes';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
