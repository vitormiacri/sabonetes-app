import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { InputSearch } from '../../components/input-search';
import { FirebaseAuth } from '../../services/firebase-auth';
import { FirebaseFirestore } from '../../services/firebase-cloud-firestore';

import {
  Container,
  CardList,
  ImageContainer,
  ImageCover,
  TextContainer,
  Title,
  Empty,
} from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  const getProducts = useCallback(async () => {
    setLoading(true);
    if (!logged) {
      console.log('não logado, logando...');
      await FirebaseAuth.login();
      setLogged(true);
    }
    const response = await FirebaseFirestore.getProducts();

    if (response.length > 0) {
      setProducts(response);
      setProductsList(response);
    }
    setLoading(false);
  }, [products, productsList, logged]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = useCallback(
    (text: string) => {
      if (text.length === 0) {
        setProductsList(products);
      } else {
        const searchItem = productsList.filter(
          item => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1,
        );
        setProductsList(searchItem);
      }
    },
    [products, productsList],
  );

  const handleOnCardPress = useCallback(
    (index: number) => {
      navigation.navigate('Details', { product: productsList[index] });
    },
    [productsList],
  );

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
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Empty>
            {loading ? 'Carregando lista...' : 'Nenhum sabonete encontrado'}
          </Empty>
        }
        ListHeaderComponent={<InputSearch handleSearch={handleSearch} />}
        data={productsList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl onRefresh={getProducts} refreshing={loading} />
        }
      ></FlatList>
    </Container>
  );
};
