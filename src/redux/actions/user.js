import * as types from '../constants/user';
import { actionFactory, actionBuilder } from './base';
import axios from 'axios';

export function registerBegin() {
  return {
    type: types.REGISTER_BEGIN
  }
}

export function registerSuccess(message) {
  return {
    type: types.REGISTER_SUCCESS,
    payload: {message}
  }
}

export function registerFailure(error) {
  return {
    type: types.REGISTER_FAILURE,
    payload: {error}
  }
}

export function register(user) {
  return function action(dispatch) {
    dispatch(registerBegin());

    return axios.post('http://localhost:8000/api/user/register', user)
    .then(response => {      
      dispatch(registerSuccess(response.data));
    })
    .catch(error => {      
      dispatch(registerFailure(error.message));
    })
  }
}

export const fetchUsers = actionFactory('USERS', 'FETCH_ALL', () => {
    return axios.get('http://localhost:8000/api/user')
  });

export const fetchUser = body => actionFactory('USERS', 'FETCH_ONE', () => {
  return axios.get('http://localhost:8000/api/user/' + body);
})()
