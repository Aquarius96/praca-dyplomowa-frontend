import * as types from '../constants/book';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null
}

function bookReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}

export default mergeable(bookReducer);