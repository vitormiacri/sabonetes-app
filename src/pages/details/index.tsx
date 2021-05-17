import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

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

type RouteParams = {
  product: ProductProps;
};

export const Details: React.FC<RouteParams> = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params as RouteParams;
  const [description, setDescription] = useState<string[]>(
    product.description.split('\\r'),
  );

  useEffect(() => {
    navigation.setOptions({ title: product.title });
  }, [navigation]);

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
            <Title>{product.title}</Title>
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
