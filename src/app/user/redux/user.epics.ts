

import {Injectable} from "@angular/core";
import {combineEpics} from "redux-observable";
import {UserActions} from "./user.actions";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {UserService} from "../user.service";

@Injectable()
export class UserEpics {

  constructor(private userService: UserService, private userActions: UserActions) {
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
          return this.userService.getAll()
        })
        .map(users => this.userActions.getUsersSuccess(users));
    }

  }

}
