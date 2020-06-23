import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';

import { Container, Image, Title, ContentImage } from './styles';

function FilmList({ title, movies }) {
  
  const navigation = useNavigation();
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
        {movies?.map(movie => (
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
