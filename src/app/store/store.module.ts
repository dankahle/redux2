import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DevToolsExtension, NgRedux, NgReduxModule} from "@angular-redux/store";
import {APP_INITIAL_STATE, IAppState} from "./store.model";
import {rootReducer} from "./store.reducer";

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {

  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

    ngRedux.configureStore(rootReducer, APP_INITIAL_STATE, [], storeEnhancers);
  }

}
