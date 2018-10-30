const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null
}

const baseReducer = (name = '') => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `FETCH_ALL_${name}_BEGIN`:
      case `FETCH_ONE_${name}_BEGIN`:
      case `ADD_${name}_BEGIN`:
      case `DELETE_${name}_BEGIN`:
      case `CONFIRM_${name}_BEGIN`:
        return {
          ...state,
          loading: true
        }
      case `FETCH_ALL_${name}_ERROR`:
      case `FETCH_ONE_${name}_ERROR`:
      case `ADD_${name}_ERROR`:
      case `DELETE_${name}_ERROR`:
      case `CONFIRM_${name}_ERROR`:
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
      case `ADD_${name}_SUCCESS`:
        return {
          ...state,
          loading: false,
          data: [...state.data, action.payload.entity]
        }
      case `DELETE_${name}_SUCCESS`:
        return {
          ...state,
          loading: false,
          data: state.data.filter(entity => entity.id !== action.payload.id)
        }
      case `CONFIRM_${name}_SUCCESS`:
        return {
          ...state,
          loading: false,
          data: state.data.map(entity => entity.id !== action.payload.id ? entity : { ...entity,
            confirmed: true
          })
        }
      default:
        return state;
    }
  }
}

const baseRateReducer = (name = '') => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `ADD_${name}_RATE_BEGIN`:
        return {
          ...state,
          loading: true
        }
      case `ADD_${name}_RATE_ERROR`:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
      case `ADD_${name}_RATE_SUCCESS`:
        return {
          ...state,
          loading: false,
          data: state.data.map(entity => {
            return entity.id !== action.payload.id ? entity : { ...entity,
              rating: action.payload.data
            }
          }),
          entity: { ...state.entity,
            rating: action.payload.data
          }
        }
      default:
        return state
    }
  }
}

const baseCommentReducer = (name = '') => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `ADD_${name}_COMMENT_BEGIN`:
      case `DELETE_${name}_COMMENT_BEGIN`:
        return {
          ...state,
          loading: true
        }
      case `ADD_${name}_COMMENT_ERROR`:
      case `DELETE_${name}_COMMENT_ERROR`:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        }
      case `ADD_${name}_COMMENT_SUCCESS`:
        return {
          ...state,
          loading: false,
          data: state.data.map(entity => {
            return entity.id !== action.payload.id ? entity : { ...entity,
              comments: [action.payload.data, ...entity.comments]
            }
          }),
          entity: { ...state.entity,
            comments: [action.payload.data, ...state.entity.comments]
          }
        }
      case `DELETE_${name}_COMMENT_SUCCESS`:
        return {
          ...state,
          loading: false,
          data: state.data.map(entity => {
            return { ...entity,
              comments: entity.comments.filter(comment => comment.id !== action.payload.id)
            }
          })
        }
      default:
        return state
    }
  }
}

export const baseUserReducer = baseReducer('USER');
export const baseAuthorReducer = baseReducer('AUTHOR');
export const baseBookReducer = baseReducer('BOOK');
export const baseGenreReducer = baseReducer('GENRE');
export const baseRoleReducer = baseReducer('ROLE');
export const baseReviewReducer = baseReducer('REVIEW');

export const baseAuthorRateReducer = baseRateReducer('AUTHOR');
export const baseBookRateReducer = baseRateReducer('BOOK');
export const baseReviewRateReducer = baseRateReducer('REVIEW');

export const baseAuthorCommentReducer = baseCommentReducer('AUTHOR');
export const baseBookCommentReducer = baseCommentReducer('BOOK');