import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { About } from '../pages';
import { HomeRoutes } from './home-stack';

const Main = createBottomTabNavigator();

export const MainRoutes: React.FC = () => (
  <Main.Navigator
    tabBarOptions={{
      activeTintColor: '#FF92B9',
      inactiveTintColor: '#C4C4C4',
      tabStyle: {
        padding: 5,
      },
    }}
  >
    <Main.Screen
      name="Home"
      component={HomeRoutes}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={color}
            size={size}
          ></MaterialCommunityIcons>
        ),
      }}
    />

    <Main.Screen
      name="Sobre"
      component={About}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="information"
            color={color}
            size={size}
          ></MaterialCommunityIcons>
        ),
      }}
    />
  </Main.Navigator>
);
