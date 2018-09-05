import * as types from '../constants/user';

const initialState = {
  loading: false,
  error: null,
  message: null
}

export default function userReducer(state = initialState, action) {
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
        message: action.payload.message
      }
    default:
      return state
  }
}