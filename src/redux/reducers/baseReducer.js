const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null
}

const baseReducer = (name = '') => {  
  return (state = initialState, action) => {
    switch(action.type) {
      case `FETCH_ALL_${name}_BEGIN`:
      case `FETCH_ONE_${name}_BEGIN`:
        return {
          ...state,
          loading: true
        }
      case `FETCH_ALL_${name}_ERROR`:
      case `FETCH_ONE_${name}_ERROR`:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
      case `FETCH_ALL_${name}_SUCCESS`:            
        return {
          ...state,
          loading: false,
          data: action.payload.data
        }
      case `FETCH_ONE_${name}_SUCCESS`:
        return {
          ...state,
          loading: false,
          entity: action.payload.data
        }
      default:
        return state;
    }
  }
}

export const baseUserReducer = baseReducer('USERS');