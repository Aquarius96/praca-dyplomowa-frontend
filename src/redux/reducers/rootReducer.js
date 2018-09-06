import {
  combineReducers
} from 'redux';
import userReducer from './userReducer';
import {
  baseUserReducer
} from './baseReducer';

export default combineReducers({
  userReducer: userReducer.merge(baseUserReducer),
});