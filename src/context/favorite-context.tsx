import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  FirebaseFirestore,
  ProductProps,
} from '../services/firebase-cloud-firestore';

export interface FavoriteContextData {
  favorites: ProductProps[];
  loading: boolean;
  getFavorites(userId: string): Promise<void>;
  setFavorite(userId: string, productId: string): Promise<void>;
  removeFavorite(userId: string, productId: string): Promise<void>;
}

export const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData,
);

export const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getFavorites = useCallback(async (userId: string): Promise<void> => {
    if (userId) {
      setLoading(true);
      const products = await FirebaseFirestore.getFavorites(userId);
      setFavorites(products);
      setLoading(false);
    }
  }, []);

  const setFavorite = useCallback(
    async (userId: string, productId: string) => {
      setLoading(true);
      const response = await FirebaseFirestore.setFavorite(userId, productId);
      if (response) {
        getFavorites(userId);
      }
      setLoading(false);
    },
    [favorites, getFavorites],
  );

  const removeFavorite = useCallback(
    async (userId: string, productId: string) => {
      setLoading(true);
      const response = await FirebaseFirestore.removeFavorite(
        userId,
        productId,
      );
      if (response) {
        getFavorites(userId);
      }
      setLoading(false);
    },
    [],
  );

  return (
    <FavoriteContext.Provider
      value={{ favorites, loading, getFavorites, setFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
