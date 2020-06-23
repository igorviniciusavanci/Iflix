import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FilmList from '../../components/FilmList';

import { Container } from './styles';

export default function Login() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ScrollView>
          <FilmList title="SPIDER-MAN" />
          <FilmList title="AVENGERS" />
          <FilmList title="BATMAN" />
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
