import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1a1a1a;
`;

export const TopContainer = styled.View`
  flex-direction: row;
`;

export const InfoContent = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin: 5px;
`;

export const Image = styled.Image`
  width: 130px;
  height: 200px;
  margin: 10px;
  resize-mode: stretch;
`;

export const Plot = styled.Text`
  margin: 10px;
  font-size: 20px;
  color: #f4f5f5;
  text-align: justify;
  font-family: 'pt-sans-regular';
`;

export const InfoTitle = styled.Text`
  font-size: 15px;
  color: #acacac;
  font-family: 'pt-sans-regular';
`;

export const InfoValue = styled.Text`
  margin-left: 5px;
  font-size: 15px;
  color: #fff;
  font-family: 'pt-sans-regular';
`;
