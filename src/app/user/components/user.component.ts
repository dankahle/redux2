
import {Component} from "@angular/core";
import {User, UserCreator} from "../user";
import * as _ from 'lodash';
import {UserActions} from "../redux/user.actions";
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {UserState} from "../user.state";
import {AppState} from "../../store/store.model";

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userState: UserState;
  selectedUser: User;
  form: User = <User>{};
  edit: User = <User>{};
  editingUser: User;
  constructor(protected userActions: UserActions, private ngRedux: NgRedux<AppState>) {
    ngRedux.subscribe(() => this.userState = ngRedux.getState().userState);
    this.refresh();
  }

  refresh() {
    this.userActions.getUsers();
  }

  ageUser(user) {
    user.incAge(5);
  }

  editUser(user) {
    this.edit = _.clone(user.toApi());
    this.editingUser = user;
  }

  updateUser(user) {
/*
    this.edit.age = Number(this.edit.age);
    this.userRepo.update(this.edit)
      .subscribe(user => this.refresh());
*/
  }

  addUser() {
/*
    this.userRepo.add(this.form)
      .subscribe(newUser => this.refresh());
*/
  }

  setInstance(id) {
/*
    this.userRepo.getOne(id, true)
      .subscribe(x => x);
*/
  }

}
