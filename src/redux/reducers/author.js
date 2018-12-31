import mergeable from 'redux-merge-reducers';

const initialState = {
  loading: false,
  error: null,
  data: [],
  filteredData: [],
  entity: {},
  query: null
}

function authorReducer(state = initialState, action) {
  switch (action.type) {
    case `ADD_BOOK_RATE_ERROR`:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case 'ADD_BOOK_RATE_SUCCESS':
      return {
        ...state,
        entity: state.entity === null ? state.entity : {
          ...state.entity,
          books: state.entity.books.map(book => book.id !== action.payload.id ? book : { ...book,
            rating: action.payload.data
          })
        }
      }
    case 'SEARCH_AUTHOR':
      return {
        ...state,
        filteredData: state.data.filter(author => author.name.toLowerCase().indexOf(action.payload.query.toLowerCase()) !== -1)
      }
    default:
      return state
  }
}

export default mergeable(authorReducer);