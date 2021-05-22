import React from 'react';
import { Image, Modal, View } from 'react-native';

import Logo from '../../assets/logo.png';

type Props = {
  show?: boolean;
};

export const SplashScreen: React.FC<Props> = ({ show }) => {
  return (
    <Modal statusBarTranslucent={true} visible={show}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FF92B9',
        }}
      >
        <Image
          source={Logo}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        ></Image>
      </View>
    </Modal>
  );
};
