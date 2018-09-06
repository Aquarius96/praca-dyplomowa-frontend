import {
  actionBuilder
} from './base';

const genreActions = actionBuilder('GENRE', 'http://localhost:8000/api/genre/');

export const fetchGenres = genreActions.FETCH_ALL;
export const fetchGenre = id => genreActions.FETCH_ONE(id)();
export const addGenre = genre => genreActions.ADD(genre)();
export const deleteGenre = id => genreActions.DELETE(id)();