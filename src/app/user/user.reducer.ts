

import {USER_INITIAL_STATE, IUser} from "./user.model";
import {UserActions} from "./user.actions";

export function formReducer(state:IUser = USER_INITIAL_STATE, action) {
  switch(action.type) {
    case UserActions.SUBMIT_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state
  }
}
