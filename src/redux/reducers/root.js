import mergeable from 'redux-merge-reducers';

import {
  combineReducers
} from 'redux';
import authorReducer from './author';
import bookReducer from './book';
import userReducer from './user';
import genreReducer from './genre';
import roleReducer from './role';
import libraryReducer from './library';

import {
  baseUserReducer,
  baseAuthorReducer,
  baseBookReducer,
  baseGenreReducer,
  baseRoleReducer,
  baseReviewReducer,
  baseAuthorRateReducer,
  baseBookRateReducer,
  baseReviewRateReducer,
  baseAuthorCommentReducer,
  baseBookCommentReducer
} from './base';

export default combineReducers({
  users: userReducer.merge(baseUserReducer),
  authors: authorReducer.merge(mergeable(baseAuthorCommentReducer).merge(mergeable(baseAuthorReducer).merge(baseAuthorRateReducer))),
  books: bookReducer.merge(mergeable(baseBookCommentReducer).merge(mergeable(baseBookReducer).merge(baseBookRateReducer))),
  genres: genreReducer.merge(baseGenreReducer),
  roles: roleReducer.merge(baseRoleReducer),
  reviews: mergeable(baseReviewReducer).merge(baseReviewRateReducer),
  library: libraryReducer
});