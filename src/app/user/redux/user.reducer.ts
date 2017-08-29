import {UserActions} from "./user.actions";
import {IUserState, USER_STATE_INITIAL} from "./user.model";

export function userReducer(state: IUserState = USER_STATE_INITIAL, action) {
  switch(action.type) {
    case UserActions.GET_USERS_SUCCESS:
      return {...state, users: action.payload};
    case UserActions.GET_USER_SUCCESS:
      return {...state, user: action.payload};
    case UserActions.ADD_USER:
      return {...state, addUser: action.payload};
    case UserActions.ADD_USER_SUCCESS:
      return {...state, addUser: action.payload};
    case UserActions.UPDATE_USER:
      return {...state, updateUser: action.payload};
    case UserActions.UPDATE_USER_SUCCESS:
      return {...state, updateUser: action.payload};
    case UserActions.DELETE_USER:
      return {...state, deleteUserId: action.meta.id};
    default:
      return state
  }
}
