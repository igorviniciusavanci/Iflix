import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1a1a1a;
  align-items: center;
  padding-top: 150px;
  /* justify-content: center; */
`;
export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
`;
export const Text = styled.Text`
  color: #fff;
  font-size: 15px;
  font-family: 'pt-sans-regular';
`;

export const Logo = styled.Text`
  margin-bottom: 30px;
  color: #db0000;
  font-size: 70px;
  font-family: 'bebas-neue-regular';
`;
