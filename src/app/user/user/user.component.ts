
import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {UserService} from "../user.service";
import * as _ from 'lodash';
import {IUser} from "../user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users$: Observable<IUser[]>;
  selectedUser: IUser;
  form: IUser = <IUser>{};
  edit: IUser = <IUser>{};
  editingUser: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.refresh();
  }

  refresh() {
    this.users$ = this.userService.getAll()
      .map(users => {
        if (this.selectedUser) {
          this.selectedUser = _.find(users, {id: this.selectedUser.id});
        }
        return users;
      });
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
}