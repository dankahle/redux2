import {UserActions} from "./user.actions";
import {IUserState, USER_STATE_INITIAL} from "./user.model";

export function userReducer(state: IUserState = USER_STATE_INITIAL, action) {
  switch(action.type) {
    case UserActions.GET_USERS_SUCCESS:
      return {...state, users: action.payload};
    case UserActions.GET_USER_SUCCESS:
      return {...state, user: action.payload};
    case UserActions.ADD_USER:
      return {...state, addedUser: false, addUser: action.payload};
    case UserActions.ADD_USER_SUCCESS:
      return {...state, addedUser: true, addUser: action.payload};
    case UserActions.UPDATE_USER:
      return {...state, updatedUser: false, updateUser: action.payload};
    case UserActions.UPDATE_USER_SUCCESS:
      return {...state, updatedUser: true, updateUser: action.payload};
    case UserActions.DELETE_USER:
      return {...state, deletedUser: false, deleteUserId: action.meta.id};
    case UserActions.DELETE_USER_SUCCESS:
      return {...state, deletedUser: true, numDeleted: action.payload.count};
    default:
      return state
  }
}
