import * as types from '../constants/user';
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
      console.log('Pomyślnie zarejestrowano!');
      dispatch(registerSuccess(response.data));
    })
    .catch(error => {
      console.log(error.message);
      dispatch(registerFailure(error.message));
    })
  }
}