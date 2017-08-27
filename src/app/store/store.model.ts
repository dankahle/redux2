
import {UserState, USER_STATE_INITIAL} from "../user/redux/user.model";

export interface AppState {
  userState: UserState;
}

export const APP_INITIAL_STATE = {
  userState: USER_STATE_INITIAL
}


