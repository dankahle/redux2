

import {combineReducers, Reducer} from "redux";
import {IAppState} from "./store.model";
import {userReducer} from "../user/redux/user.reducer";
import {initializeReducer} from "../core/initialize/initialize.reducers";

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  initialize: initializeReducer,
  userState: userReducer,
});
