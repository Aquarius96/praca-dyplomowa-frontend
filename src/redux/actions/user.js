import {
  actionBuilder
} from './base';
import axios from 'axios';
import * as config from '../../utils/axios-config';
import decode from 'jwt-decode';

const userActions = actionBuilder('USER');

export const fetchUsers = userActions.FETCH_ALL;
export const fetchUser = email => userActions.FETCH_ONE(email)();
export const register = user => userActions.ADD(user)();
export const deleteUser = email => userActions.DELETE(email)();

export const login = (model) => () => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_BEGIN'
    });

    return axios.post(config.URL + 'user/login', model)
      .then(response => {
        localStorage.setItem('token', response.data);
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: decode(response.data)
          }
        })
      })
      .catch(error => {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: {
            error: error.message
          }
        })
      })
  }
}

export const changePassword = (emailAddress, model) => () => {
  return dispatch => {
    dispatch({
      type: 'CHANGE_PASSWORD_BEGIN'
    });

    console.log('model', model)

    return axios.post(config.URL + 'user/changepassword/' + emailAddress, model)
      .then(() => {
        dispatch({
          type: 'CHANGE_PASSWORD_SUCCESS'
        })
      })
      .catch(error => {
        dispatch({
          type: 'CHANGE_PASSWORD_ERROR',
          payload: {
            error: error.message
          }
        })
      })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT'
    });
  }
}

export const saveUser = (user) => {
  return dispatch => {
    dispatch({
      type: 'SAVE_USER',
      payload: {
        user
      }
    });
  }
}