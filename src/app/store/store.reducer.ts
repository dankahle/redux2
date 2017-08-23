

import {combineReducers, Reducer} from "redux";
import {AppState} from "./store.model";
import {userReducer} from "../user/redux/user.reducer";

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  userState: userReducer,
});
