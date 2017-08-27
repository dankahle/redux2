

import {dispatch} from "@angular-redux/store";

export class UserActions {
  static GET_USER = 'GET_USER';
  static GET_USER_SUCCESS = 'GET_USER_SUCCESS';
  static GET_USERS = 'GET_USERS';
  static GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
  static SET_USER = 'SET_USER';
  static SET_DC = 'SET_DC';

  @dispatch()
  getUser(id) {
    return {type: UserActions.GET_USER, meta: {id: id}};
  }

  getUserSuccess(user) {
    return {type: UserActions.GET_USER_SUCCESS, payload: user};
  }

  @dispatch()
  getUsers() {
    return {type: UserActions.GET_USERS};
  }

  getUsersSuccess(users) {
    return {type: UserActions.GET_USERS_SUCCESS, payload: users};
  }

/*
  @dispatch()
  setUser(user:IUser) {
    return {type: UserActions.SET_USER, payload: user};
  }

  @dispatch()
  setDc(id, dc) {
    return {type: UserActions.SET_DC, payload: {id: id, dc: dc}};
  }
*/

}
