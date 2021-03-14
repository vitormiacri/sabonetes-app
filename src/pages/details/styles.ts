import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const CardList = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid #c4c4c4;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 400px;
`;

export const ImageCover = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-top-width: 1px;
  border-top-color: #c4c4c4;
`;

export const Title = styled.Text`
  color: #ff92b9;
  font-size: 24px;
  font-weight: bold;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  border: 1px solid #c4c4c4;
  border-top-width: 0;
  padding: 20px 0;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 20px;
`;
