import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import FilmList from '../../components/FilmList';
import { Creators } from '../../store/redux/movies';
import { Container } from './styles';

const topCategories = ['SPIDER-MAN', 'AVENGERS', 'BATMAN'];

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.movies);
  useEffect(() => {
    dispatch(Creators.fetchMovies(topCategories));
  }, [dispatch]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ScrollView>
          {categories.map(category => (
            <FilmList
              key={category.title}
              title={category.title}
              movies={category.movies}
            />
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
