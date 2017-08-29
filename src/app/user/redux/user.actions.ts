

import {dispatch} from "@angular-redux/store";
import {IUser} from "./user.model";

export class UserActions {
  static GET_USER = 'GET_USER';
  static GET_USER_SUCCESS = 'GET_USER_SUCCESS';
  static ADD_USER = 'ADD_USER';
  static ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
  static UPDATE_USER = 'UPDATE_USER';
  static UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
  static DELETE_USER = 'DELETE_USER';
  static DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
  static GET_USERS = 'GET_USERS';
  static GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
  static SET_USER = 'SET_USER';
  static SET_DC = 'SET_DC';

  @dispatch()
  getUsers() {
    return {type: UserActions.GET_USERS};
  }
  @dispatch()
  getUsersSuccess(users) {
    return {type: UserActions.GET_USERS_SUCCESS, payload: users};
  }

  @dispatch()
  getUser(id) {
    return {type: UserActions.GET_USER, meta: {id: id}};
  }
  @dispatch()
  getUserSuccess(user) {
    return {type: UserActions.GET_USER_SUCCESS, payload: user};
  }

  @dispatch()
  addUser(user) {
    return {type: UserActions.ADD_USER, payload: user};
  }
  @dispatch()
  addUserSuccess(user) {
    return {type: UserActions.ADD_USER_SUCCESS, payload: user};
  }

  @dispatch()
  updateUser(user) {
    return {type: UserActions.UPDATE_USER, payload: user};
  }
  @dispatch()
  updateUserSuccess(user) {
    return {type: UserActions.UPDATE_USER_SUCCESS, payload: user};
  }

  @dispatch()
  deleteUser(id) {
    return {type: UserActions.DELETE_USER, meta: {id: id}};
  }
  @dispatch()
  deleteUserSuccess(num) {
    return {type: UserActions.DELETE_USER_SUCCESS, payload: num};
  }

}
