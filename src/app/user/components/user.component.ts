
import {Component} from "@angular/core";
import {UserApi} from "../user.api";
import {Observable} from "rxjs/Observable";
import {User, UserCreator} from "../user";

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users$: Observable<User[]>;
  selectedUser: User;
  constructor(userCreator: UserCreator) {
    this.users$ = userCreator.getAll().map(arr => arr.map(user => user.toObject()));
  }
  age(user) {
    user.incAge(5);
  }

}
