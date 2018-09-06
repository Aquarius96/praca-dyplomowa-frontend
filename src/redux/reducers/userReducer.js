import * as types from '../constants/user';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.DELETE_USER_BEGIN:
      return {
        ...state,
        loading: true
      }
    case types.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter(user => user.emailAddress !== action.payload.id)
      }
    default:
      return state
  }
}

export default mergeable(userReducer);