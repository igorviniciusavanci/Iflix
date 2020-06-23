import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Container, Image, Title, ContentImage } from './styles';

function FilmList({ title }) {
  const navigation = useNavigation();
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=8e880851&type=movie&s=${title}`
      );
      setmovies(response.data.Search);
    }
    getFilms();
  }, [title]);

  const handleOnPressImage = useCallback(
    imdbID => {
      navigation.navigate('Details', { imdbID });
    },
    [navigation]
  );

  return (
    <Container>
      <Title>{title}</Title>
      <ScrollView horizontal>
        {movies.map(movie => (
          <ContentImage
            key={movie.imdbID}
            onPress={() => handleOnPressImage(movie.imdbID)}
          >
            <Image
              source={{
                uri: movie.Poster,
              }}
            />
          </ContentImage>
        ))}
      </ScrollView>
    </Container>
  );
}

FilmList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FilmList;
