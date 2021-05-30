import React from 'react';

import { AuthProvider } from './auth-context';
import { FavoriteProvider } from './favorite-context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <FavoriteProvider>{children}</FavoriteProvider>
  </AuthProvider>
);

export default AppProvider;
