

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
      this.getUsersEpic(),
      this.getUserEpic(),
      this.addUserEpic(),
      this.updateUserEpic(),
      this.deleteUserEpic()
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

  updateUserEpic() {
    return action$ => {
      return action$.ofType(UserActions.UPDATE_USER)
        .switchMap(action => {
          return this.userService.update(action.payload)
        })
        .map(user => this.userActions.updateUserSuccess(user));
    }
  }

  deleteUserEpic() {
    return action$ => {
      return action$.ofType(UserActions.DELETE_USER)
        .switchMap(action => {
          return this.userService.delete(action.meta.id)
        })
        .map(user => this.userActions.deleteUserSuccess(user));
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
