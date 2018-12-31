import {
  actionBuilder,
  subActionFactory
} from './base';
import axios from 'axios';
import {
  uploadImage
} from "../../utils/image-upload";
import * as config from '../../utils/axios-config';

const bookActions = actionBuilder('BOOK', 'http://localhost:8000/api/book/');

export const fetchBooks = params => bookActions.FETCH_ALL(params)();
export const fetchBook = id => bookActions.FETCH_ONE(id)();
export const deleteBook = id => bookActions.DELETE(id)();
export const confirmBook = id => bookActions.CONFIRM(id)();

export const addBookRate = (id, rate) => subActionFactory('BOOK', 'ADD', 'RATE', () => {
  return axios.post('http://localhost:8000/api/book/' + id + '/rate/', rate, config.headers);
}, id)();

export const addBookComment = (id, comment) => subActionFactory('BOOK', 'ADD', 'COMMENT', () => {
  return axios.post('http://localhost:8000/api/book/' + id + '/comment/', comment, config.headers);
}, id)();
export const deleteBookComment = (id) => subActionFactory('BOOK', 'DELETE', 'COMMENT', () => {
  return axios.delete('http://localhost:8000/api/book/comment/' + id, {}, config.headers);
}, id)();

export const addBook = (book, image) => () => {
  return dispatch => {
    dispatch({
      type: `ADD_BOOK_BEGIN`
    });

    return axios.post('http://localhost:8000/api/book', book)
      .then(response => {
        uploadImage('book', response.data.id, image);
        dispatch({
          type: `ADD_BOOK_SUCCESS`,
          payload: {
            entity: response.data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: `ADD_BOOK_ERROR`,
          payload: {
            error: error.message
          }
        })
      });
  }
}

export const searchBook = (query) => {
  return dispatch => {
    dispatch({
      type: 'SEARCH_BOOK',
      payload: {
        query
      }
    })
  }
}