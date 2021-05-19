import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #00000080;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  margin-top: 60%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Text = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 0 40px;
  font-weight: bold;
  color: #666661;
  line-height: 30px;
`;

export const Divider = styled.View`
  width: 90%;
  border: 1px solid #ff92b980;
`;
