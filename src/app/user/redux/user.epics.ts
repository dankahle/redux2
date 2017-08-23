

import {Injectable} from "@angular/core";
import {combineEpics} from "redux-observable";
import {UserActions} from "./user.actions";
import {Http} from "@angular/http";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {UserRepo} from "../user.repo";

@Injectable()
export class UserEpics {

  constructor(private userRepo: UserRepo, private userActions: UserActions) {
  }

  getEpics() {
    return combineEpics(
      this.getUsersEpic()
    )
  }

  getUsersEpic() {
    return action$ => {
      return action$.ofType(UserActions.GET_USERS)
        .switchMap(action => {
          return this.userRepo.getAll()
        })
        .map(users => this.userActions.getUsersSuccess(users));
    }

  }

}
