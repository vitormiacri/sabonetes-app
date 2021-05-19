import React, { createContext, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from '../services/protocols/social-authentication';
import GoogleAuth from '../services/firebase-google-auth';

export interface AuthContextData {
  user: UserData;
  loading: boolean;
  signInGoogle(): Promise<boolean>;
  signOutGoogle(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState<UserData>({} as UserData);
  const [loading, setLoading] = useState<boolean>(true);
  const googleAuth = new GoogleAuth();

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem('@sabonetes:user');
      if (user) {
        const userData = JSON.parse(user);
        setUserState(userData);
      }
      setLoading(false);
    }
    loadStorageData();
  });

  const signInGoogle = useCallback(async (): Promise<boolean> => {
    setLoading(true);
    const user = await googleAuth.login();
    if (user) {
      await AsyncStorage.setItem('@sabonetes:user', JSON.stringify(user));
      setUserState(user);
      setLoading(false);
      return true;
    } else {
      console.error('Google Login: Usuário não logado');
      return false;
    }
  }, []);

  const signOutGoogle = useCallback(async (): Promise<void> => {
    await googleAuth.logout();
    setUserState({} as UserData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: userState, loading, signInGoogle, signOutGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
