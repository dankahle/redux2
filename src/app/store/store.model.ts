
import {IUserState, USER_STATE_INITIAL} from "../user/redux/user.model";
import {IInitialize, INITIALIZE_INITIAL_STATE} from "../core/initialize/initialize.model";

export interface IAppState {
  initialize: IInitialize
  userState: IUserState;
}

export const APP_INITIAL_STATE = {
  initialize: INITIALIZE_INITIAL_STATE,
  userState: USER_STATE_INITIAL
}


