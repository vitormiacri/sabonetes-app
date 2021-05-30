import { useContext } from 'react';
import {
  FavoriteContext,
  FavoriteContextData,
} from '../context/favorite-context';

export function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used within an AuthProvider');
  }

  return context;
}
