import {
  actionBuilder,
  subActionFactory
} from './base';
import axios from 'axios';
import {
  uploadImage
} from "../../utils/image-upload";

const authorActions = actionBuilder('AUTHOR', 'http://localhost:8000/api/author/');

export const fetchAuthors = params => authorActions.FETCH_ALL(params)();
export const fetchAuthor = id => authorActions.FETCH_ONE(id)();
export const deleteAuthor = id => authorActions.DELETE(id)();

export const addAuthorRate = (id, rate) => subActionFactory('AUTHOR', 'ADD', 'RATE', () => {
  return axios.post('http://localhost:8000/api/author/' + id + '/rate/', rate);
}, id)();

export const addAuthorComment = (id, comment) => subActionFactory('AUTHOR', 'ADD', 'COMMENT', () => {
  return axios.post('http://localhost:8000/api/author/' + id + '/comment/', comment);
}, id)();
export const deleteAuthorComment = (id) => subActionFactory('AUTHOR', 'DELETE', 'COMMENT', () => {
  return axios.delete('http://localhost:8000/api/author/comment/' + id);
}, id)();

export const addAuthor = (author, image) => () => {
  return dispatch => {
    dispatch({
      type: `ADD_AUTHOR_BEGIN`
    });

    return axios.post('http://localhost:8000/api/author', author)
      .then(response => {
        uploadImage('author', response.data.id, image);
        dispatch({
          type: `ADD_AUTHOR_SUCCESS`,
          payload: {
            entity: response.data
          }
        })
      })
      .catch(error => {
        dispatch({
          type: `ADD_AUTHOR_ERROR`,
          payload: {
            error: error.message
          }
        })
      });

  }
}