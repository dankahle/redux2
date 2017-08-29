import {Component} from "@angular/core";
import {UserService} from "../user.service";
import * as _ from 'lodash';
import {IUser, IUserState} from "../redux/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserActions} from "../redux/user.actions";
import {NgRedux, select} from "@angular-redux/store";
import {IAppState} from "../../store/store.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userState: IUserState;
  @select('userState') userState$: Observable<IUserState>;
  @select(['userState', 'updatedUser']) updatedUser$: Observable<boolean>;
  @select(['userState', 'deletedUser']) deletedUser$: Observable<boolean>;
  selectedUser: IUser;
  form: IUser = <IUser>{};
  edit: IUser = <IUser>{};
  editingUser: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,
              protected userActions: UserActions) {
    this.userState$.subscribe(userState => this.userState = userState);
    this.refresh();
  }

  refresh() {
    this.userService.getAll();
  }

  editUser(user) {
    this.edit = _.clone(user);
    this.editingUser = user;
  }

  deleteUser(user) {
    this.userActions.deleteUser(user.id);
    const sub = this.deletedUser$
      .subscribe(deletedUser => {
        if (deletedUser) {
          sub.unsubscribe();
          this.refresh();
        }
      })
  }

  updateUser(user) {
    this.edit.age = Number(this.edit.age);
    this.userActions.updateUser(this.edit);
    const sub = this.updatedUser$
      .subscribe(updatedUser => {
        if (updatedUser) {
          sub.unsubscribe();
          this.refresh();
        }
      })
  }

  showDetail(user: IUser) {
    this.router.navigate([user.id], {relativeTo: this.route});
  }

  toggleAdd(event) {
    event.preventDefault();
    if (this.route.snapshot.children.length &&
      this.route.snapshot.children[0].url.length &&
      this.route.snapshot.children[0].url[0].path === 'add') {
      this.router.navigateByUrl('/user');
    } else {
      this.router.navigateByUrl('/user/add');
    }
  }

  sendError(id) {
    this.userActions.getUser(id);
  }

}
