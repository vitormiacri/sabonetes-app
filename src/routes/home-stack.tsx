import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Home, Details } from '../pages';

const HomeStack = createStackNavigator();

export const HomeRoutes: React.FC = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Carina Sabonetes Artesanais',
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#FF92B9',
        },
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Carina Sabonetes Artesanais',
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#FF92B9',
        },
        headerBackImage: () => (
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="#FFF"
            style={{ paddingLeft: 10 }}
          ></MaterialIcons>
        ),
      }}
    />
  </HomeStack.Navigator>
);
