
import {Component} from "@angular/core";
import {UserApi} from "../user.api";
import {Observable} from "rxjs/Observable";
import {User, UserCreator} from "../user";
import * as _ from 'lodash';

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users$: Observable<User[]>;
  selectedUser: User;
  form: User = <User>{};
  edit: User = <User>{};
  editingUser: User;
  constructor(private userCreator: UserCreator, private userApi: UserApi) {
    this.refresh();
  }

  refresh() {
    this.users$ = this.userCreator.getAll().map(arr => arr.map(user => user.toObject()));
  }

  age(user) {
    user.incAge(5);
  }

  editUser(user) {
    this.edit = _.clone(user.toObject());
    this.editingUser = user;
  }

  updateUser(user) {
    this.userCreator.update(this.edit)
      .subscribe(user => this.refresh());
  }

  addUser() {
    this.userCreator.add(this.form)
      .subscribe(newUser => this.refresh());
  }
}
