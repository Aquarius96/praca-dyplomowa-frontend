import * as types from '../constants/user';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null,
  user: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_BEGIN':
    case 'CHANGE_PASSWORD_BEGIN':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_ERROR':
    case 'CHANGE_PASSWORD_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload.user
      }
    case 'CHANGE_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null
      }
    case 'SAVE_USER':
      return {
        ...state,
        user: action.payload.user
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