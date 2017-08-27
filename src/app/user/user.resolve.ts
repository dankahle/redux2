import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IUser, IUserState} from "./redux/user.model";
import {UserActions} from "./redux/user.actions";
import {select} from "@angular-redux/store";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserResolve implements Resolve<IUser> {
  @select(['userState']) userState$: Observable<IUserState>;
  subject: Subject<IUser>;

  constructor(private userActions: UserActions) {
    this.userState$.subscribe(userState => {
      if (this.subject && userState.loadedUser === true) {
        this.subject.next(userState.user);
      }
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    // console.log('user resolve start');
    this.userActions.getUser(route.params.id);
    this.subject = new Subject<IUser>();
    this.subject.subscribe(x => console.log('mysub', x));
    return this.subject;
  }

}
