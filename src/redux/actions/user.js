import {
  actionBuilder
} from './base';

const userActions = actionBuilder('USER');

export const fetchUsers = userActions.FETCH_ALL;
export const fetchUser = email => userActions.FETCH_ONE(email)();
export const register = user => userActions.ADD(user)();
export const deleteUser = email => userActions.DELETE(email)();