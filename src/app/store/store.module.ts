import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {EpicEpics} from "../epic/epics";
import {DevToolsExtension, NgRedux} from "@angular-redux/store";
import {APP_INITIAL_STATE, IAppState} from "./model";
import {rootReducer} from "./reducer";
import {FormEpics} from "../form/epic";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    epicEpics: EpicEpics,
    formEpics: FormEpics) {

    const storeEnhancers = devTools.isEnabled() ? // <- New
      [ devTools.enhancer() ] : // <- New
      []; // <- New

    var middleware = createEpicMiddleware(combineEpics(
      epicEpics.getEpics(),
      formEpics.getEpics()
    ));

    ngRedux.configureStore(rootReducer, APP_INITIAL_STATE, [middleware], storeEnhancers);
  }

}
