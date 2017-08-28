

import {combineReducers, Reducer} from "redux";
import {IAppState} from "./store.model";
import {userReducer} from "../user/redux/user.reducer";
import {initializeReducer} from "../core/initialize/initialize.reducers";
import {interceptorReducer} from "../core/interceptors/redux/interceptor.reducers";

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  initialize: initializeReducer,
  interceptor: interceptorReducer,
  userState: userReducer,
});
