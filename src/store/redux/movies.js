import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  fetchMovies: ['titles'],
  fetchSuccess: ['movies'],
});

const INITIAL_STATE = [];

const success = (state = INITIAL_STATE, action) => {
  const categories = action.categories.map(category => {
    return {
      title: category.config.params.s,
      movies: category.data.Search,
    };
  });

  return categories;
};

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_MOVIES]: null,
  [Types.FETCH_SUCCESS]: success,
});
