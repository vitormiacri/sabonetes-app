import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  handleSearch(text: string): void;
}

export const InputSearch: React.FC<InputProps> = ({ handleSearch }) => {
  const [text, setText] = useState('');

  const handleChangeText = useCallback(
    text => {
      handleSearch(text);
      setText(text);
    },
    [handleSearch],
  );
  return (
    <Container>
      <TextInput
        placeholder="Encontre um sabonete"
        autoCapitalize="none"
        autoCompleteType="off"
        keyboardType="default"
        underlineColorAndroid="#FFF"
        autoCorrect={false}
        onChangeText={handleChangeText}
        value={text}
      ></TextInput>
      <MaterialIcons name="search" size={24} color="#C4C4C4"></MaterialIcons>
    </Container>
  );
};
