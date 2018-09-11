import mergeable from 'redux-merge-reducers';

import {
  combineReducers
} from 'redux';
import userReducer from './user';
import authorReducer from './author';
import bookReducer from './book';
import genreReducer from './genre';
import roleReducer from './role';

import {
  baseUserReducer,
  baseAuthorReducer,
  baseBookReducer,
  baseGenreReducer,
  baseRoleReducer,
  baseReviewReducer,
  baseAuthorRateReducer,
  baseBookRateReducer,
  baseReviewRateReducer
} from './base';

export default combineReducers({
  userReducer: userReducer.merge(baseUserReducer),
  authorReducer: mergeable(authorReducer.merge(baseAuthorReducer)).merge(baseAuthorRateReducer),
  bookReducer: mergeable(bookReducer.merge(baseBookReducer)).merge(baseBookRateReducer),
  genreReducer: genreReducer.merge(baseGenreReducer),
  roleReducer: roleReducer.merge(baseRoleReducer),
  reviewReducer: mergeable(baseReviewReducer).merge(baseReviewRateReducer)
});