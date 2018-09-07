import {
  actionBuilder,
  rateActionBuilder
} from './base';

const authorActions = actionBuilder('AUTHOR', 'http://localhost:8000/api/author/');
const authorRateActions = rateActionBuilder('AUTHOR', 'http://localhost:8000/api/author/');

export const fetchAuthors = authorActions.FETCH_ALL;
export const fetchAuthor = id => authorActions.FETCH_ONE(id)();
export const addAuthor = author => authorActions.ADD(author)();
export const deleteAuthor = id => authorActions.DELETE(id)();

export const addAuthorRate = (id, rate) => authorRateActions.ADD(id, rate)();