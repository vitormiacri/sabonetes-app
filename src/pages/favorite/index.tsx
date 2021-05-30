import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import { TouchableHighlight, FlatList, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ModalLogin from '../../components/modal-login';
import { useAuth, useFavorite } from '../../hooks';

import {
  Container,
  CardList,
  ImageContainer,
  ImageCover,
  TextContainer,
  Title,
  Empty,
} from './styles';

export const Favorite: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { favorites, getFavorites, loading } = useFavorite();
  const [showModal, setShowModal] = useState(false);

  const handleOnCardPress = useCallback(
    (index: number) => {
      navigation.navigate('Details', { product: favorites[index] });
    },
    [favorites],
  );

  useFocusEffect(() => {
    if (!user.uid) {
      setShowModal(true);
    }
  });

  useEffect(() => {
    if (user.uid) {
      getFavorites(user.uid);
    }
  }, [user.uid]);

  const renderItem = ({ item, index }) => (
    <TouchableHighlight
      onPress={() => handleOnCardPress(index)}
      underlayColor="none"
    >
      <CardList>
        <ImageContainer>
          <ImageCover
            source={{ uri: item.photoUrl }}
            resizeMode="contain"
          ></ImageCover>
        </ImageContainer>
        <TextContainer>
          <Title>{item.title}</Title>
          <MaterialIcons
            name="remove-red-eye"
            color="#C4C4C4"
            size={24}
          ></MaterialIcons>
        </TextContainer>
      </CardList>
    </TouchableHighlight>
  );

  return (
    <>
      {showModal && <ModalLogin setShow={setShowModal} />}
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Empty>
              {loading ? (
                <ActivityIndicator size="large" color="#FF92B9" />
              ) : (
                'Nenhum sabonete favorito'
              )}
            </Empty>
          }
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        ></FlatList>
      </Container>
    </>
  );
};
