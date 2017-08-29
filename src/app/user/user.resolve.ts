import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IUser, IUserState} from "./redux/user.model";
import {select} from "@angular-redux/store";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/first';
import {UserService} from "./user.service";

@Injectable()
export class UserResolve implements Resolve<IUser> {
  @select(['userState']) userState$: Observable<IUserState>;
  subject: Subject<IUser>;

  constructor(private userService: UserService) {
    this.userState$.subscribe(userState => {
      if (this.subject && userState.loadedUser === true) {
        this.subject.next(userState.user);
      }
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    // console.log('user resolve start');
    return this.userService.getOne(route.params.id);
  }

}
