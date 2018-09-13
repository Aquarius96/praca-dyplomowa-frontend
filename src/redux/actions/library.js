import axios from "axios";
import * as config from '../../utils/axios-config';
import {
  libraryActionFactory
} from './base';

export const fetchLibrary = (userEmailAddress) => () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_LIBRARY_BEGIN'
    });

    return axios.get(config.URL + "library/" + userEmailAddress)
      .then(response => {
        dispatch({
            type: 'FETCH_LIBRARY_SUCCESS',
            payload: {
              data: response.data
            }
          })
          .catch(error => {
            dispatch({
              type: 'FETCH_LIBRARY_ERROR',
              payload: {
                error: error.message
              }
            })
          })
      })
  }
}

const actionBuilder = name => {
  const actions = {
    ADD: (userEmailAddress, id) => libraryActionFactory(name, 'ADD', () => {
      return axios.post(config.URL + 'library/' + userEmailAddress + '/' + name + '/' + id);
    }, userEmailAddress, id),
    DELETE: (userEmailAddress, id) => libraryActionFactory(name, 'DELETE', () => {
      return axios.delete(config.URL + 'library/' + userEmailAddress + '/' + name + '/' + id);
    }, userEmailAddress, id)
  }

  return actions;
}

const favoriteAuthorlibraryActions = actionBuilder('FAVORITE_AUTHOR');
export const addFavoriteAuthor = (userEmailAddress, id) => favoriteAuthorlibraryActions.ADD(userEmailAddress, id)();
export const deleteFavoriteAuthor = (userEmailAddress, id) => favoriteAuthorlibraryActions.DELETE(userEmailAddress, id)();

const favoriteBooklibraryActions = actionBuilder('FAVORITE_BOOK');
export const addFavoriteBook = (userEmailAddress, id) => favoriteBooklibraryActions.ADD(userEmailAddress, id)();
export const deleteFavoriteBook = (userEmailAddress, id) => favoriteBooklibraryActions.DELETE(userEmailAddress, id)();

const currentlyReadBooklibraryActions = actionBuilder('CURRENTLY_READ_BOOK');
export const addCurrentlyReadBook = (userEmailAddress, id) => currentlyReadBooklibraryActions.ADD(userEmailAddress, id)();
export const deleteCurrentlyReadBook = (userEmailAddress, id) => currentlyReadBooklibraryActions.DELETE(userEmailAddress, id)();

const wantedBooklibraryActions = actionBuilder('WANTED_BOOK');
export const addWantedBook = (userEmailAddress, id) => wantedBooklibraryActions.ADD(userEmailAddress, id)();
export const deleteWantedBook = (userEmailAddress, id) => wantedBooklibraryActions.DELETE(userEmailAddress, id)();

const readBooklibraryActions = actionBuilder('READ_BOOK');
export const addReadBook = (userEmailAddress, model) => libraryActionFactory('READ_BOOK', 'ADD', () => {
  return axios.post(config.URL + 'library/' + userEmailAddress + '/READ_BOOK', model);
}, userEmailAddress);
export const deleteReadBook = (userEmailAddress, id) => readBooklibraryActions.DELETE(userEmailAddress, id)();
