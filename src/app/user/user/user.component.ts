import {Component} from "@angular/core";
import {UserService} from "../user.service";
import * as _ from 'lodash';
import {IUser, IUserState} from "../redux/user.model";
import {ActivatedRoute, Router} from "@angular/router";
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
  edit: IUser = <IUser>{};
  editingUser: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.userState$.subscribe(userState => this.userState = userState);
    this.refresh();
  }

  refresh() {
    this.userService.getAll()
      .subscribe(() => {})
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
      .subscribe(updatedUser => this.refresh());

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
    this.userService.getOne(id)
      .subscribe(() => {});
  }

}
