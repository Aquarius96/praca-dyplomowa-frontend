import mergeable from 'redux-merge-reducers';

import {
  combineReducers
} from 'redux';
import userReducer from './user';
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
  baseReviewRateReducer,
  baseAuthorCommentReducer,
  baseBookCommentReducer
} from './base';

export default combineReducers({
  userReducer: userReducer.merge(baseUserReducer),
  authorReducer: mergeable(baseAuthorCommentReducer).merge(mergeable(baseAuthorReducer).merge(baseAuthorRateReducer)),
  bookReducer: mergeable(baseBookCommentReducer).merge( mergeable(baseBookReducer).merge(baseBookRateReducer)),
  genreReducer: genreReducer.merge(baseGenreReducer),
  roleReducer: roleReducer.merge(baseRoleReducer),
  reviewReducer: mergeable(baseReviewReducer).merge(baseReviewRateReducer)
});
