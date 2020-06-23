import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api';

function* fetchMovies(payload) {
  const { titles } = payload;
  try {
    const response = yield all(
      titles.map(title =>
        call(api.get, `/`, {
          params: {
            type: 'movie',
            s: title,
            apikey: '8e880851',
          },
        })
      )
    );
    yield put({ type: 'FETCH_SUCCESS', categories: response });
  } catch (e) {
    console.log(e.response);
    // yield put({ type: 'FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeLatest('FETCH_MOVIES', fetchMovies);
}

export default mySaga;
