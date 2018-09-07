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
  baseAuthorRateReducer
} from './base';

export default combineReducers({
  userReducer: userReducer.merge(baseUserReducer),
  authorReducer: authorReducer.merge(baseAuthorReducer),
  bookReducer: bookReducer.merge(baseBookReducer),
  genreReducer: genreReducer.merge(baseGenreReducer),
  roleReducer: mergeable(roleReducer.merge(baseRoleReducer)).merge(baseAuthorRateReducer)
});