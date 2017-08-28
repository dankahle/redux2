

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
      this.getUserEpic(),
      this.addUserEpic(),
      this.getUsersEpic()
    )
  }

  getUserEpic() {
    return action$ => {
      return action$.ofType(UserActions.GET_USER)
        .switchMap(action => {
          return this.userService.getOne(action.meta.id)
        })
        .map(user => this.userActions.getUserSuccess(user));
    }
  }

  addUserEpic() {
    return action$ => {
      return action$.ofType(UserActions.ADD_USER)
        .switchMap(action => {
          return this.userService.add(action.payload)
        })
        .map(user => this.userActions.addUserSuccess(user));
    }
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
