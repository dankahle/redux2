

import {Injectable} from "@angular/core";
import {combineEpics} from "redux-observable";
import {UserActions} from "./user.actions";
import {Http} from "@angular/http";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserEpics {

  constructor(private http:Http, private userActions: UserActions) {

  }

  getEpics() {
    return combineEpics(
      this.addUserEpic()
    )
  }

  addUserEpic() {
    return action$ => {
      return action$.ofType(UserActions.SUBMIT)
        .delay(1000)
        .mergeMap(action => {
          return this.http.get('http://www.mocky.io/v2/598920532700005f10aff03e');
        })
        .map(response => this.formActions.submitSuccess(response));
    }

  }

}
