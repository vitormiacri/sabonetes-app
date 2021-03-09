import React, { useCallback } from 'react';
import { Image, Linking, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  SocialLinks,
  SocialLinkContainer,
  SocialText,
  Header,
  HeaderText,
} from './styles';
import Logo from '../../assets/logo.png';

export const About: React.FC = () => {
  const handleOnPress = useCallback((type?: string) => {
    if (type === 'facebook') {
      Linking.openURL('https://www.facebook.com/carinasabonetesartesanais');
    } else {
      Linking.openURL('https://www.instagram.com/carinasabonetesartesanais_');
    }
  }, []);

  return (
    <>
      <Header>
        <HeaderText>Sobre</HeaderText>
      </Header>
      <Container>
        <Image
          source={Logo}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        ></Image>

        <SocialLinkContainer>
          <TouchableHighlight
            underlayColor="none"
            style={{ width: '100%' }}
            onPress={() => handleOnPress('facebook')}
          >
            <SocialLinks>
              <MaterialCommunityIcons
                name="facebook"
                size={36}
                color="blue"
              ></MaterialCommunityIcons>
              <SocialText>Curta nossa página</SocialText>
            </SocialLinks>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="none"
            style={{ width: '100%' }}
            onPress={() => handleOnPress()}
          >
            <SocialLinks>
              <MaterialCommunityIcons
                name="instagram"
                size={36}
                color="red"
              ></MaterialCommunityIcons>
              <SocialText>Siga nosso perfil</SocialText>
            </SocialLinks>
          </TouchableHighlight>
        </SocialLinkContainer>
      </Container>
    </>
  );
};
