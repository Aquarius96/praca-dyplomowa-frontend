import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  entity: null,
  query: null,
  filteredData: []
}

function bookReducer(state = initialState, action) {
  switch (action.type) {      
    case `ADD_REVIEW_RATE_BEGIN`:
    case `ADD_REVIEW_BEGIN`:
      return {
        ...state,
        loading: true
      }
    case `ADD_REVIEW_RATE_ERROR`:
    case `ADD_REVIEW_ERROR`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case `ADD_REVIEW_RATE_SUCCESS`:    
      return {
        ...state,
        loading: false,
        entity: {
          ...state.entity,
          reviews: state.entity.reviews.map(review => review.id !== action.payload.id ? review : {...review, rating: action.payload.data})
        }        
      }      
    case `ADD_REVIEW_SUCCESS`:
      return {
        ...state,
        loading: false
      }
    case 'SEARCH_BOOK':
      return {
        ...state,
        filteredData: state.data.filter(book => book.title.toLowerCase().indexOf(action.payload.query.toLowerCase()) !== -1)
      }
    default: return state
  }
}

export default mergeable(bookReducer);