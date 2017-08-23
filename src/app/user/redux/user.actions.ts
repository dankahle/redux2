

import {dispatch} from "@angular-redux/store";
import {IUser} from "./user.interface";

export class UserActions {
  static GET_USERS = 'GET_USERS';
  static GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
  static SET_USER = 'SET_USER';
  static SET_DC = 'SET_DC';

  @dispatch()
  getUsers() {
    return {type: UserActions.GET_USERS};
  }

  getUsersSuccess(users) {
    return {type: UserActions.GET_USERS_SUCCESS, payload: users};
  }

  @dispatch()
  setUser(user:IUser) {
    return {type: UserActions.SET_USER, payload: user};
  }

  @dispatch()
  setDc(id, dc) {
    return {type: UserActions.SET_DC, payload: {id: id, dc: dc}};
  }

}
