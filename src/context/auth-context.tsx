import React, { createContext, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseAuth } from '../services/firebase-auth';

export type UserData = {
  uid: string;
  photoUrl: string;
  name: string;
  email: string;
};

export interface AuthContextData {
  user: UserData;
  loading: boolean;
  signInGoogle(): Promise<void>;
  signOutGoogle(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState<UserData>({} as UserData);
  const [loading, setLoading] = useState<boolean>(true);

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

  const signInGoogle = useCallback(async (): Promise<void> => {
    const user = await FirebaseAuth.loginWithGoogle();
    if (user) {
      await AsyncStorage.setItem('@sabonetes:user', JSON.stringify(user));
      setUserState(user);
    } else {
      console.error('Google Login: Usuário não logado');
    }
  }, []);

  const signOutGoogle = useCallback(async (): Promise<void> => {
    await FirebaseAuth.logoutGoogle();
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
