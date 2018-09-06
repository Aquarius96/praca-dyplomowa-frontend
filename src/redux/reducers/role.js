import * as types from '../constants/role';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null
}

function roleReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}

export default mergeable(roleReducer);