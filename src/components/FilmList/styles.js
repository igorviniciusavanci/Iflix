import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #1a1a1a;
  margin: 5px 0 5px 5px;
`;

export const Title = styled.Text`
  margin: 5px;
  color: #fff;
  font-family: 'pt-sans-regular';
`;

export const ContentImage = styled.TouchableOpacity`
  flex: 1;
`;

export const Image = styled.Image`
  width: 130px;
  height: 200px;
  margin: 0 5px;
  resize-mode: stretch;
`;
