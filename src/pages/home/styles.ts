import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px 20px 5px;
`;

export const CardList = styled.View`
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid #c4c4c4;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 250px;
`;

export const ImageCover = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const Title = styled.Text`
  color: #ff92b9;
  font-size: 24px;
  font-weight: bold;
`;

export const Empty = styled.Text`
  color: #000;
  font-size: 24px;
  padding: 30px 10px;
  text-align: center;
`;