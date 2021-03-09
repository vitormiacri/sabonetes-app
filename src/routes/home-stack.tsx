import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages';

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
  </HomeStack.Navigator>
);
