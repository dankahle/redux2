import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {DevToolsExtension, NgRedux, NgReduxModule} from "@angular-redux/store";
import {APP_INITIAL_STATE, AppState} from "./store.model";
import {rootReducer} from "./store.reducer";
import {UserEpics} from "../user/redux/user.epics";

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(ngRedux: NgRedux<AppState>, devTools: DevToolsExtension, userEpics: UserEpics) {

    const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

    var middleware = createEpicMiddleware(combineEpics(
      userEpics.getEpics()
    ));

    ngRedux.configureStore(rootReducer, APP_INITIAL_STATE, [middleware], storeEnhancers);
  }

}
