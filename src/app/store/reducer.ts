

import {epicReducer} from "../epic/reducer";
import {tutReducer} from "../tutorial/reducer";
import {combineReducers, Reducer} from "redux";
import {IAppState} from "./model";
import {formReducer} from "../form/reducer";

export const rootReducer:Reducer<IAppState> = combineReducers({
  tutorial: tutReducer,
  epic: epicReducer,
  form: formReducer
})
