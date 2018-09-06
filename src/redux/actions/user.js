import {
  actionBuilder
} from './base';

const userActions = actionBuilder('USER', 'http://localhost:8000/api/user/');

export const fetchUsers = userActions.FETCH_ALL;
export const fetchUser = email => userActions.FETCH_ONE(email)();
export const register = user => userActions.ADD(user)();
export const deleteUser = email => userActions.DELETE(email)();