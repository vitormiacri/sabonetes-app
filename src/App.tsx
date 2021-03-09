import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { MainRoutes } from './routes';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FF92B9" />
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
