import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {UserService} from "../user.service";
import {UserComponent} from "../user/user.component";
import {IUser, IUserState} from "../redux/user.model";
import {UserActions} from "../redux/user.actions";
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  formObj: IUser = <IUser>{};
  @ViewChild('myform') myform;
  @select(['userState']) userState$: Observable<IUserState>;

  constructor(private router: Router, private userService: UserService, private parent: UserComponent,
              private userActions: UserActions) { }

  cancel() {
   this.router.navigateByUrl('/user');
  }

  addUser() {
    this.userActions.addUser(this.formObj);
    const sub = this.userState$.subscribe(userState => {
      if (userState.addedUser) {
        sub.unsubscribe();
        this.parent.refresh()
        this.router.navigateByUrl('/user');
      }
    })

/*
    // hybrid approach2: lose the epics and push the work into service
    this.userService.addUser(this.formObj)
      .subscribe(newUser => {
        this.parent.refresh()
        this.router.navigateByUrl('/user');
      });
*/

    /*
    hybrid approach1: lose the epics and go with sync reducer actions only

    this.userActions.addUser(this.formObj);
    this.userService.add(this.formObj)
      .subscribe(newUser => {
        this.userActions.addUserSuccess(newUser);
        this.parent.refresh()
        this.router.navigateByUrl('/user');
      });

     */


  }

  // this never gets called, but would if not in a child route, i.e. works if you put the form in userComponent
  // the complaint is that form isn't attached to document or something, then never calls its sumbit event, weird
  submit(e) {
    e.preventDefault();
  }
}
