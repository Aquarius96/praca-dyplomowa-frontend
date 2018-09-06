import {
  combineReducers
} from 'redux';
import userReducer from './userReducer';
import { userReducer2 } from './baseReducer';

export default combineReducers({
  userReducer,
  userReducer2
});