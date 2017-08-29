import {dispatch} from "@angular-redux/store";
import {Injectable} from "@angular/core";

@Injectable()
export class InitializeActions {
  static readonly init1_LOAD = "init1/LOAD";
  static readonly init2_LOAD = "init2/LOAD";
  static readonly init3_LOAD = "init3/LOAD";
  static readonly init4_LOAD = "init4/LOAD";
  static readonly init5_LOAD = "init5/LOAD";
  static readonly init1_LOAD_SUCCESS = "init1/LOAD_SUCCESS";
  static readonly init2_LOAD_SUCCESS = "init2/LOAD_SUCCESS";
  static readonly init3_LOAD_SUCCESS = "init3/LOAD_SUCCESS";
  static readonly init4_LOAD_SUCCESS = "init4/LOAD_SUCCESS";
  static readonly init5_LOAD_SUCCESS = "init5/LOAD_SUCCESS";
  static readonly INITIALIZE = 'initialize/INITIALIZE';
  static readonly INITIALIZE_SUCCESS = 'initialize/INITIALIZE_SUCCESS';

  @dispatch()
  initialize = () => ({type: InitializeActions.INITIALIZE});

  @dispatch()
  initializeSuccess = () => ({type: InitializeActions.INITIALIZE_SUCCESS});

  @dispatch()
  init1_load() {
    return {type: InitializeActions.init1_LOAD};
  }

  @dispatch()
  init2_load() {
    return {type: InitializeActions.init2_LOAD};
  }

  @dispatch()
  init3_load() {
    return {type: InitializeActions.init3_LOAD};
  }

  @dispatch()
  init4_load() {
    return {type: InitializeActions.init4_LOAD};
  }

  @dispatch()
  init5_load() {
    return {type: InitializeActions.init5_LOAD};
  }

  @dispatch()
  init1_loadSuccess(payload) {
    return {type: InitializeActions.init1_LOAD_SUCCESS, payload: payload};
  }

  @dispatch()
  init2_loadSuccess(payload) {
    return {type: InitializeActions.init2_LOAD_SUCCESS, payload: payload};
  }

  @dispatch()
  init3_loadSuccess(payload) {
    return {type: InitializeActions.init3_LOAD_SUCCESS, payload: payload};
  }

  @dispatch()
  init4_loadSuccess(payload) {
    return {type: InitializeActions.init4_LOAD_SUCCESS, payload: payload};
  }

  @dispatch()
  init5_loadSuccess(payload) {
    return {type: InitializeActions.init5_LOAD_SUCCESS, payload: payload};
  }

}


