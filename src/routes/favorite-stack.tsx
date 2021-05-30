import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Favorite, Details } from '../pages';

const HomeStack = createStackNavigator();

export const FavoriteRoutes: React.FC = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Favorite"
      component={Favorite}
      options={{
        title: 'Favoritos',
        headerTitleStyle: {
          fontSize: 18,
        },
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
        title: 'Favoritos',
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
