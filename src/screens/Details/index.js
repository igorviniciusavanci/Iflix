import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

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
  const navigation = useNavigation();
  const route = useRoute();
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=8e880851&i=${route.params.imdbID}`
      );
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
