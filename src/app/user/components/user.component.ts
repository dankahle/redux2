
import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {User, UserCreator} from "../user";
import * as _ from 'lodash';
import {UserRepo} from "../user.repo";
import {of} from "rxjs/observable/of";

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
  constructor(private userRepo: UserRepo, protected userCreator: UserCreator) {
    this.refresh();
  }

  refresh() {
    this.users$ = this.userRepo.getAll()
      .map(users => {
        if (this.selectedUser) {
          this.selectedUser = _.find(users, {id: this.selectedUser.id});
        }
        return users;
      });
  }

  ageUser(user) {
    user.incAge(5);
  }

  editUser(user) {
    this.edit = _.clone(user.toApi());
    this.editingUser = user;
  }

  updateUser(user) {
    this.edit.age = Number(this.edit.age);
    this.userRepo.update(this.edit)
      .subscribe(user => this.refresh());
  }

  addUser() {
    this.userRepo.add(this.form)
      .subscribe(newUser => this.refresh());
  }

  setInstance(id) {
    this.userRepo.getOne(id, true)
      .subscribe(x => x);
  }

}
