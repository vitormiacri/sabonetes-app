import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { About } from '../pages';
import { HomeRoutes } from './home-stack';
import { FavoriteRoutes } from './favorite-stack';

const Main = createBottomTabNavigator();

export const MainRoutes: React.FC = () => (
  <Main.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      keyboardHidesTabBar: true,
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
          <MaterialIcons name="home" color={color} size={size}></MaterialIcons>
        ),
      }}
    />

    <Main.Screen
      name="Favoritos"
      component={FavoriteRoutes}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons
            name="favorite"
            color={color}
            size={size}
          ></MaterialIcons>
        ),
      }}
    />

    <Main.Screen
      name="Contato"
      component={About}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons
            name="alternate-email"
            color={color}
            size={size}
          ></MaterialIcons>
        ),
      }}
    />
  </Main.Navigator>
);
