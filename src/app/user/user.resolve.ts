import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IUser, IUserState} from "./redux/user.model";
import 'rxjs/add/operator/first';
import {UserService} from "./user.service";

@Injectable()
export class UserResolve implements Resolve<IUser> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    // console.log('user resolve start');
    return this.userService.getOne(route.params.id);
  }

}
