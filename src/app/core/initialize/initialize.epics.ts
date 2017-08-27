import {combineEpics, Epic} from "redux-observable";
import {InitializeActions} from "./initialize.actions";
import {Init1, Init2, Init3, Init4, Init5} from "../services/init-services";
import {IAppState} from "../../store/store.model";
import * as _ from 'lodash';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {Injectable} from "@angular/core";

@Injectable()
export class InitializeEpics {
  initializing = false;
  initialized = false;
  onLevel1 = false;
  level1 = ['init1', 'init2'];
  initedLevel1 = [];
  onLevel2 = false;
  level2 = ['init3', 'init4'];
  initedLevel2 = [];
  onLevel3 = false;
  level3 = ['init5'];
  initedLevel3 = [];

  constructor(private init1: Init1, private init2: Init2, private init3: Init3, private init4: Init4, private init5: Init5,
              private initializeActions: InitializeActions) {}

  getEpics() {
    return combineEpics(this.loadInit1(), this.loadInit2(), this.loadInit3(), this.loadInit4(), this.loadInit5(),
      this.initialize(), this.initializeLevel1(), this.initializeLevel2(), this.initializeLevel3(), this.intializeFailure());

    /*
        return combineEpics(this.loadInit1(), this.loadInit2(), this.loadInit3(), this.loadInit4(), this.loadInit5(),
          this.initialize(), this.initializeLevel1(), this.initializeLevel2(), this.initializeLevel3(), this.intializeFailure());
    */
  }

  initialize = () => {
    return (action$, store) => action$
      .filter(() => !this.initializing && !this.initialized)
      .ofType(InitializeActions.INITIALIZE)
      .switchMap(() => {
        this.initializing = true;
        this.onLevel1 = true;
        return Observable.of(this.initializeActions.init1_load(), this.initializeActions.init2_load());
      });
  }

  level1Complete() {
    return _.difference(this.level1, this.initedLevel1).length === 0;
  }

  level2Complete() {
    return _.difference(this.level2, this.initedLevel2).length === 0;
  }

  level3Complete() {
    return _.difference(this.level3, this.initedLevel3).length === 0;
  }

  initializeLevel1 = () => {
    return (action$, store) => action$
      .filter(() => this.onLevel1 || !this.initialized)
      .ofType(InitializeActions.init1_LOAD_SUCCESS, InitializeActions.init2_LOAD_SUCCESS)
      .switchMap(action => {
        switch (action.type) { // switch all success actions and push appropriate value
          case InitializeActions.init1_LOAD_SUCCESS:
            this.initedLevel1.push('init1');
            break;
          case InitializeActions.init2_LOAD_SUCCESS:
            this.initedLevel1.push('init2');
            break;
        }

        if (this.level1Complete()) {
          this.onLevel1 = false;
          this.onLevel2 = true;
          return Observable.of(this.initializeActions.initializeLevel1(this.initedLevel1.join(', ')),
            this.initializeActions.init3_load(), this.initializeActions.init4_load())
        }
        return Observable.of(this.initializeActions.initializeLevel1(this.initedLevel1.join(', ')));
      });
  }

  initializeLevel2 = () => {
    return (action$, store) => action$
      .filter(() => this.onLevel2 || !this.initialized)
      .ofType(InitializeActions.init3_LOAD_SUCCESS, InitializeActions.init4_LOAD_SUCCESS)
      .switchMap(action => {
        switch (action.type) { // switch all success actions and push appropriate value
          case InitializeActions.init3_LOAD_SUCCESS:
            this.initedLevel2.push('init3');
            break;
          case InitializeActions.init4_LOAD_SUCCESS:
            this.initedLevel2.push('init4');
            break;
        }

        if (this.level2Complete()) {
          this.onLevel2 = false;
          this.onLevel3 = true;
          return Observable.of(this.initializeActions.initializeLevel2(this.initedLevel2.join(', ')),
            this.initializeActions.init5_load());
        }
        return Observable.of(this.initializeActions.initializeLevel2(this.initedLevel2.join(', ')));
      });
  }

  initializeLevel3 = () => {
    return (action$, store) => action$
      .filter(() => this.onLevel3 || !this.initialized)
      .ofType(InitializeActions.init5_LOAD_SUCCESS)
      .switchMap(action => {
        switch (action.type) { // switch all success actions and push appropriate value
          case InitializeActions.init5_LOAD_SUCCESS:
            this.initedLevel3.push('init5');
            break;
        }

        if (this.level3Complete()) {
          this.onLevel3 = false;
          this.initialized = true;
          this.initializing = false;
          return Observable.of(this.initializeActions.initializeSuccess(),
            this.initializeActions.initializeLevel3(this.initedLevel3.join(', ')));
        }
        return Observable.of(this.initializeActions.initializeLevel3(this.initedLevel3.join(', ')))
      });
  }

  intializeFailure = () => {
    return (action$, store) => action$
      .filter(() => this.initializing && !this.initialized)
      .ofType(
        InitializeActions.init1_LOAD_FAILURE,
        InitializeActions.init2_LOAD_FAILURE,
        InitializeActions.init3_LOAD_FAILURE,
        InitializeActions.init4_LOAD_FAILURE,
        InitializeActions.init5_LOAD_FAILURE,
        ) // put all failures here
      .switchMap(action => {
        return Observable.of(this.initializeActions.initializeFailure(action.payload))
      });
  }

  loadInit1 = () => {
    return (action$, store) => {
      return action$.ofType(InitializeActions.init1_LOAD)
        .do(action => {
        const i = 5;
        })
        .switchMap(action => this.init1.getVal())
        .map(payload => this.initializeActions.init1_loadSuccess(payload))
    }
  }
  loadInit2 = () => {
    return (action$, store) => {
      return action$.ofType(InitializeActions.init2_LOAD)
        .switchMap(action => this.init2.getVal())
        .map(payload => this.initializeActions.init2_loadSuccess(payload))
    }
  }
  loadInit3 = () => {
    return (action$, store) => {
      return action$.ofType(InitializeActions.init3_LOAD)
        .switchMap(action => this.init3.getVal())
        .map(payload => this.initializeActions.init3_loadSuccess(payload))
    }
  }
  loadInit4 = () => {
    return (action$, store) => {
      return action$.ofType(InitializeActions.init4_LOAD)
        .switchMap(action => this.init4.getVal())
        .map(payload => this.initializeActions.init4_loadSuccess(payload))
    }
  }
  loadInit5 = () => {
    return (action$, store) => {
      return action$.ofType(InitializeActions.init5_LOAD)
        .switchMap(action => this.init5.getVal())
        .map(payload => this.initializeActions.init5_loadSuccess(payload))
    }
  }

}
