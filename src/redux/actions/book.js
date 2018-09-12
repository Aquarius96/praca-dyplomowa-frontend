import {
  actionBuilder,
  subActionFactory
} from './base';
import axios from 'axios';

const bookActions = actionBuilder('BOOK', 'http://localhost:8000/api/book/');

export const fetchBooks = bookActions.FETCH_ALL;
export const fetchBook = id => bookActions.FETCH_ONE(id)();
export const addBook = book => bookActions.ADD(book)();
export const deleteBook = id => bookActions.DELETE(id)();

export const addBookRate = (id, rate) => subActionFactory('BOOK', 'ADD', 'RATE', () => {
  return axios.post('http://localhost:8000/api/book/' + id + '/rate/', rate);
}, id)();

export const addBookComment = (id, comment) => subActionFactory('BOOK', 'ADD', 'COMMENT', () => {
  return axios.post('http://localhost:8000/api/book/' + id + '/comment/', comment);
}, id)();
export const deleteBookComment = (id) => subActionFactory('BOOK', 'DELETE', 'COMMENT', () => {
  return axios.delete('http://localhost:8000/api/book/comment/' + id);
}, id)();
