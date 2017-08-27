

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
  static readonly init1_LOAD_FAILURE = "init1/LOAD_FAILURE";
  static readonly init2_LOAD_FAILURE = "init2/LOAD_FAILURE";
  static readonly init3_LOAD_FAILURE = "init3/LOAD_FAILURE";
  static readonly init4_LOAD_FAILURE = "init4/LOAD_FAILURE";
  static readonly init5_LOAD_FAILURE = "init5/LOAD_FAILURE";
  static readonly INITIALIZE = 'initialize/INITIALIZE';
  static readonly INITIALIZE_LEVEL1 = 'initialize/INITIALIZE_LEVEL1';
  static readonly INITIALIZE_LEVEL2 = 'initialize/INITIALIZE_LEVEL2';
  static readonly INITIALIZE_LEVEL3 = 'initialize/INITIALIZE_LEVEL3';
  static readonly INITIALIZE_SUCCESS = 'initialize/INITIALIZE_SUCCESS';
  static readonly INITIALIZE_FAILURE = 'initialize/INITIALIZE_FAILURE';

  @dispatch()
  initialize = () => ({
    type: InitializeActions.INITIALIZE,
  });

  initializeLevel1 = (str: string) => ({
    type: InitializeActions.INITIALIZE_LEVEL1,
    payload: str,
  });

  initializeLevel2 = (str: string) => ({
    type: InitializeActions.INITIALIZE_LEVEL2,
    payload: str,
  });

  initializeLevel3 = (str: string) => ({
    type: InitializeActions.INITIALIZE_LEVEL3,
    payload: str,
  });

  initializeSuccess = () => ({
    type: InitializeActions.INITIALIZE_SUCCESS,
  });

  initializeFailure = (payload) => ({
    type: InitializeActions.INITIALIZE_FAILURE,
    payload: payload,
  });

  init1_load() {
    return {type: InitializeActions.init1_LOAD};
  }
  init2_load() {
    return {type: InitializeActions.init2_LOAD};
  }
  init3_load() {
    return {type: InitializeActions.init3_LOAD};
  }
  init4_load() {
    return {type: InitializeActions.init4_LOAD};
  }
  init5_load() {
    return {type: InitializeActions.init5_LOAD};
  }
  init1_loadSuccess(payload) {
    return {type: InitializeActions.init1_LOAD_SUCCESS, payload: payload};
  }
  init2_loadSuccess(payload) {
    return {type: InitializeActions.init2_LOAD_SUCCESS, payload: payload};
  }
  init3_loadSuccess(payload) {
    return {type: InitializeActions.init3_LOAD_SUCCESS, payload: payload};
  }
  init4_loadSuccess(payload) {
    return {type: InitializeActions.init4_LOAD_SUCCESS, payload: payload};
  }
  init5_loadSuccess(payload) {
    return {type: InitializeActions.init5_LOAD_SUCCESS, payload: payload};
  }

}


