import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import {InitializeActions} from "../initialize/initialize.actions";

@Injectable()
export class Init1 {
  constructor(private initializeActions: InitializeActions) {}
  getVal() {
    this.initializeActions.init1_load();
    return Observable.of('one')
      .do(data => this.initializeActions.init1_loadSuccess(data))
      // .do(data => console.log('init1'))
      .delay(200);
  }
}

@Injectable()
export class Init2 {
  constructor(private initializeActions: InitializeActions) {}
  getVal() {
    this.initializeActions.init2_load();
    return Observable.of('two')
      .do(data => this.initializeActions.init2_loadSuccess(data))
      // .do(data => console.log('init2'))
      .delay(200);
  }
}

@Injectable()
export class Init3 {
  constructor(private initializeActions: InitializeActions) {}
  getVal() {
    this.initializeActions.init3_load();
    return Observable.of('three')
      .do(data => this.initializeActions.init3_loadSuccess(data))
      // .do(data => console.log('init3'))
      .delay(200);
  }
}

@Injectable()
export class Init4 {
  constructor(private initializeActions: InitializeActions) {}
  getVal() {
    this.initializeActions.init4_load();
    return Observable.of('four')
      .do(data => this.initializeActions.init4_loadSuccess(data))
      // .do(data => console.log('init4'))
      .delay(200);
  }
}

@Injectable()
export class Init5 {
  constructor(private initializeActions: InitializeActions) {}
  getVal() {
    this.initializeActions.init5_load();
    return Observable.of('five')
      .do(data => this.initializeActions.init5_loadSuccess(data))
      // .do(data => console.log('init5'))
      .delay(200);
  }
}



