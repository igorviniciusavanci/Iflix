import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';

import {
  Container,
  Image,
  Plot,
  InfoValue,
  InfoTitle,
  InfoContent,
  InfoContainer,
  TopContainer,
} from './styles';

export default function Details() {
  const route = useRoute();
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await api.get('/', {
        params: {
          type: 'movie',
          i: route.params.imdbID,
          apikey: '8e880851',
        },
      });
      setmovie(response.data);
    }
    getFilms();
  }, [route.params.imdbID]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TopContainer>
          <Image source={{ uri: movie.Poster }} />
          <InfoContainer>
            <InfoContent>
              <InfoTitle>Title:</InfoTitle>
              <InfoValue>{movie.Title}</InfoValue>
            </InfoContent>
            <InfoContent>
              <InfoTitle>Year:</InfoTitle>
              <InfoValue>{movie.Year}</InfoValue>
            </InfoContent>
            <InfoContent>
              <InfoTitle>Released:</InfoTitle>
              <InfoValue>{movie.Released}</InfoValue>
            </InfoContent>
            <InfoContent>
              <InfoTitle>Runtime:</InfoTitle>
              <InfoValue>{movie.Runtime}</InfoValue>
            </InfoContent>
            <InfoContent>
              <InfoTitle>Language:</InfoTitle>
              <InfoValue>{movie.Language}</InfoValue>
            </InfoContent>
            <InfoContent>
              <InfoTitle>Country:</InfoTitle>
              <InfoValue>{movie.Country}</InfoValue>
            </InfoContent>
          </InfoContainer>
        </TopContainer>
        <ScrollView>
          <Plot>{movie.Plot}</Plot>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
