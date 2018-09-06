import {
  actionBuilder
} from './base';

const bookActions = actionBuilder('BOOK', 'http://localhost:8000/api/book/');

export const fetchBooks = bookActions.FETCH_ALL;
export const fetchBook = id => bookActions.FETCH_ONE(id)();
export const addBook = book => bookActions.ADD(book)();
export const deleteBook = id => bookActions.DELETE(id)();