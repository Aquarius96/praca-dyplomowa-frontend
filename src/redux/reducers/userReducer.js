export default function userReducer(state = { result: '' }, action) {
    switch (action.type) {
     case 'SIMPLE_ACTION':
        console.log('dzialam');
      return {
          ...state,
       result: action.payload
      }
     default:
      return state
    }
   }