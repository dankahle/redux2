import {Component} from "@angular/core";
import {UserService} from "../user.service";
import * as _ from 'lodash';
import {IUser, UserState} from "../redux/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserActions} from "../redux/user.actions";
import {NgRedux} from "@angular-redux/store";
import {AppState} from "../../store/store.model";

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userState: UserState;
  selectedUser: IUser;
  form: IUser = <IUser>{};
  edit: IUser = <IUser>{};
  editingUser: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,
              protected userActions: UserActions, private ngRedux: NgRedux<AppState>) {
    ngRedux.subscribe(() => this.userState = ngRedux.getState().userState);
    this.refresh();
  }

  refresh() {
    this.userActions.getUsers();
  }

  editUser(user) {
    this.edit = _.clone(user);
    this.editingUser = user;
  }

  deleteUser(user) {
    this.userService.delete(user.id)
      .subscribe(() => this.refresh());
  }

  updateUser(user) {
    this.edit.age = Number(this.edit.age);
    this.userService.update(this.edit)
      .subscribe(user => this.refresh());
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

  sendError(num) {
    this.userService.getOne(num).subscribe(x => x);
  }

}
