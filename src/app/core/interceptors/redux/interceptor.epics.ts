import {combineEpics, Epic} from "redux-observable";
import * as _ from 'lodash';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {Injectable} from "@angular/core";
import {InterceptorActions} from "./interceptor.actions";

@Injectable()
export class InitializeEpics {

  constructor(private interceptorActions: InterceptorActions) {}

  getEpics() {
    return combineEpics();
  }

}
