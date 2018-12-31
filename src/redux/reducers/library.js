const initialState = {
  loading: false,
  error: null,
  data: {
    favoriteAuthors: [],
    favoriteBooks: [],
    currentlyReadBooks: [],
    readBooks: [],
    wantedBooks: []
  },
  entity: null,
  query: null
}

export default function libraryReducer(state = initialState, action, name) {
  switch (action.type) {
    case 'FETCH_LIBRARY_BEGIN':
    case 'ADD_FAVORITE_AUTHOR_BEGIN':
    case 'ADD_FAVORITE_BOOK_BEGIN':
    case 'ADD_CURRENTLY_READ_BOOK_BEGIN':
    case 'ADD_READ_BOOK_BEGIN':
    case 'ADD_WANTED_BOOK_BEGIN':
    case 'DELETE_FAVORITE_AUTHOR_BEGIN':
    case 'DELETE_FAVORITE_BOOK_BEGIN':
    case 'DELETE_CURRENTLY_READ_BOOK_BEGIN':
    case 'DELETE_READ_BOOK_BEGIN':
    case 'DELETE_WANTED_BOOK_BEGIN':
    case 'ADD_BOOK_RATE_BEGIN':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_LIBRARY_ERROR':
    case 'ADD_FAVORITE_AUTHOR_ERROR':
    case 'ADD_FAVORITE_BOOK_ERROR':
    case 'ADD_CURRENTLY_READ_BOOK_ERROR':
    case 'ADD_READ_BOOK_ERROR':
    case 'ADD_WANTED_BOOK_ERROR':
    case 'DELETE_FAVORITE_AUTHOR_ERROR':
    case 'DELETE_FAVORITE_BOOK_ERROR':
    case 'DELETE_CURRENTLY_READ_BOOK_ERROR':
    case 'DELETE_READ_BOOK_ERROR':
    case 'DELETE_WANTED_BOOK_ERROR':
    case 'ADD_BOOK_RATE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case 'FETCH_LIBRARY_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case 'ADD_FAVORITE_AUTHOR_SUCCESS':
    case 'ADD_FAVORITE_BOOK_SUCCESS':
    case 'ADD_CURRENTLY_READ_BOOK_SUCCESS':
    case 'ADD_READ_BOOK_SUCCESS':
    case 'ADD_WANTED_BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case 'DELETE_FAVORITE_AUTHOR_SUCCESS':
      return {
        ...state,
        loading: false,
        data: { ...state.data,
          favoriteAuthors: state.data.favoriteAuthors.filter(entity => entity.id !== action.payload.id)
        }
      }
    case 'DELETE_FAVORITE_BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        data: { ...state.data,
          favoriteBooks: state.data.favoriteBooks.filter(entity => entity.id !== action.payload.id)
        }
      }
    case 'DELETE_CURRENTLY_READ_BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        data: { ...state.data,
          currentlyReadBooks: state.data.currentlyReadBooks.filter(entity => entity.id !== action.payload.id)
        }
      }
    case 'DELETE_READ_BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        data: { ...state.data,
          readBooks: state.data.favoriteAuthors.filter(entity => entity.id !== action.payload.id)
        }
      }
    case 'DELETE_WANTED_BOOK_SUCCESS':
      return {
        ...state,
        loading: false,
        data: { ...state.data,
          wantedBooks: state.data.wantedBooks.filter(entity => entity.id !== action.payload.id)
        }
      }
    case 'ADD_BOOK_RATE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          currentlyReadBooks: state.data.currentlyReadBooks.map(entity => {
            return entity.id !== action.payload.id ? entity : { ...entity,
              rating: action.payload.data
            }
          }),
          favoriteBooks: state.data.favoriteBooks.map(entity => {
            return entity.id !== action.payload.id ? entity : { ...entity,
              rating: action.payload.data
            }
          }),
          wantedBooks: state.data.wantedBooks.map(entity => {
            return entity.id !== action.payload.id ? entity : { ...entity,
              rating: action.payload.data
            }
          }),
          readBooks: state.data.readBooks.map(entity => {
            return entity.id !== action.payload.id ? entity : { ...entity,
              rating: action.payload.data
            }
          }),
        }
      }
    default:
      return state
  }
}