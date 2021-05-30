import React, { useCallback, useEffect, useState } from 'react';
import {
  ScrollView,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CardList,
  ImageContainer,
  ImageCover,
  TextContainer,
  Title,
  DescriptionContainer,
  Description,
} from './styles';
import { ProductProps } from '../../services/firebase-cloud-firestore';
import { useFavorite, useAuth } from '../../hooks';

type RouteParams = {
  product: ProductProps;
};

export const Details: React.FC<RouteParams> = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = useAuth();
  const { favorites, loading, setFavorite, removeFavorite } = useFavorite();
  const { product } = route.params as RouteParams;
  const [description, setDescription] = useState<string[]>(
    product.description.split('\\r'),
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleSaveFavorite = useCallback(async () => {
    await setFavorite(user.uid, product.id);
    setIsFavorite(true);
  }, [user.uid]);

  const handleRemoveFavorite = useCallback(async () => {
    await removeFavorite(user.uid, product.id);
    setIsFavorite(false);
  }, [user.uid]);

  useEffect(() => {
    navigation.setOptions({ title: product.title });
  }, [navigation]);

  useEffect(() => {
    const favoritesIds = favorites.map(item => item.id);
    const containFavorite = favoritesIds.includes(product.id);
    setIsFavorite(containFavorite);
  }, [favorites]);

  return (
    <ScrollView>
      <Container>
        <CardList>
          <ImageContainer>
            <ImageCover
              source={{ uri: product.photoUrl }}
              resizeMode="contain"
            ></ImageCover>
          </ImageContainer>
          <TextContainer>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Title>{product.title}</Title>
              <TouchableHighlight
                onPress={isFavorite ? handleRemoveFavorite : handleSaveFavorite}
                underlayColor={null}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#FF92B9" />
                ) : (
                  <MaterialIcons
                    name={isFavorite ? 'favorite' : 'favorite-border'}
                    color="#FF92B9"
                    size={26}
                  ></MaterialIcons>
                )}
              </TouchableHighlight>
            </View>
          </TextContainer>
        </CardList>
        <DescriptionContainer>
          {description.map((item, index) => (
            <Description key={index}>{item}</Description>
          ))}
        </DescriptionContainer>
      </Container>
    </ScrollView>
  );
};
