import * as types from '../constants/user';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null,
  logged: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_BEGIN':
    case 'LOGOUT_BEGIN':
      return {
        ...state,
        loading: true        
      }
    case 'LOGIN_ERROR':
    case 'LOGOUT_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        logged: true
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false
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