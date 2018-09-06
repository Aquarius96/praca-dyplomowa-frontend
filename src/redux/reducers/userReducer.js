import * as types from '../constants/user';
import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  message: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_BEGIN:      
      return {
        ...state,
        loading: true
      }
    case  types.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'dziala'
      }
    default:
      return state
  }
}

export default mergeable(userReducer);