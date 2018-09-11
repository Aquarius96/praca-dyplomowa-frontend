import {
  actionBuilder,
  rateActionFactory
} from './base';
import axios from 'axios';

const authorActions = actionBuilder('AUTHOR', 'http://localhost:8000/api/author/');

export const fetchAuthors = authorActions.FETCH_ALL;
export const fetchAuthor = id => authorActions.FETCH_ONE(id)();
export const addAuthor = author => authorActions.ADD(author)();
export const deleteAuthor = id => authorActions.DELETE(id)();

export const addAuthorRate = (id, rate) => rateActionFactory('AUTHOR', 'ADD', () => {
  return axios.post('http://localhost:8000/api/author/' + id + '/rate/', rate);
}, id)();