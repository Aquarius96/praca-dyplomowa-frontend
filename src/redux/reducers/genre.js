import * as types from '../constants/genre';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null
}

function genreReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}

export default mergeable(genreReducer);