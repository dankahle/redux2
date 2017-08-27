import {UserActions} from "./user.actions";
import {IUserState, USER_STATE_INITIAL} from "./user.model";
import * as _ from 'lodash';

export function userReducer(state: IUserState = USER_STATE_INITIAL, action) {
  switch(action.type) {
    case UserActions.GET_USER:
      return {...state, loadedUser: false};
    case UserActions.GET_USER_SUCCESS:
      return {...state, loadedUser: true, user: action.payload};
    case UserActions.GET_USERS_SUCCESS:
      return {...state, users: action.payload};
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
