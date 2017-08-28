import {UserActions} from "./user.actions";
import {IUserState, USER_STATE_INITIAL} from "./user.model";
import * as _ from 'lodash';

export function userReducer(state: IUserState = USER_STATE_INITIAL, action) {
  switch(action.type) {
    case UserActions.GET_USERS_SUCCESS:
      return {...state, users: action.payload};
    case UserActions.GET_USER:
      return {...state, loadedUser: false};
    case UserActions.GET_USER_SUCCESS:
      return {...state, loadedUser: true, user: action.payload};
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
    /*
        case UserActions.SET_USER:
          return {...state, user: action.payload};
        case UserActions.SET_DC:
        {
          let newObj;
          if (_.find(state.users, {id: action.payload.id})) {
            let newUsers = [...state.users].map(user => {
              return {...user};
            });
            let user = _.find(newUsers, {id: action.payload.id});
            user.dc = action.payload.dc;
            newObj = newObj || {};
            newObj.users = newUsers;
          }
          if (state.user && state.user.id === action.payload.id) {
            let newUser = {...state.user};
            newUser.dc = action.payload.dc;
            newObj = newObj || {};
            newObj.user = newUser;
          }
          return {...state, ...newObj};
        }
    */
    default:
      return state
  }
}
