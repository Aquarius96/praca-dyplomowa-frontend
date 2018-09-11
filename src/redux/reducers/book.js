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
    case `ADD_BOOK_REVIEW_RATE_BEGIN`:
      return {
        ...state,
        loading: true
      }
    case `ADD_BOOK_REVIEW_RATE_ERROR`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case `ADD_BOOK_REVIEW_RATE_SUCCESS`:
      return {
        ...state,
        loading: false,
        data: state.data.map(entity => {
          return entity.id !== action.payload.id ? entity : {...entity, reviews: {...entity.reviews, }}
        })
      }      
    default: return state
  }
}

export default mergeable(bookReducer);