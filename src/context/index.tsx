import React from 'react';

import { AuthProvider } from './auth-context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
