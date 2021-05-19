import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/core';

import { Container, Content, Text, Divider } from './styles';

type Props = {
  show?: boolean;
  setShow(value: boolean): void;
};

const LoginModal: React.FC<Props> = ({ show, setShow }) => {
  const { loading, signInGoogle } = useAuth();
  const navigation = useNavigation();

  const handleGoogleOnPress = useCallback(async () => {
    const logged = await signInGoogle();
    if (logged) {
      setShow(false);
    }
  }, []);

  const handleOnClose = useCallback(() => {
    setShow(false);
    navigation.goBack();
  }, []);

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={handleOnClose}
      >
        <Content>
          <Text>
            Para ver e salvar seus sabonetes favoritos, é necessário se
            autenticar.
          </Text>
          <Divider />
          <>
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={handleGoogleOnPress}
              disabled={loading}
            />
          </>
        </Content>
      </Modal>
    </Container>
  );
};

export default LoginModal;
