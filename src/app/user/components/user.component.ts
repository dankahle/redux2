
import {Component} from "@angular/core";
import {UserApi} from "../user.api";
import {Observable} from "rxjs/Observable";
import {User} from "../user";

@Component({
  selector: 'dk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users$: Observable<User[]>;
  selectedUser: User;
  constructor(userApi: UserApi) {
    this.users$ = userApi.getAll();
  }
  age(user) {
    user.incAge(5);
  }

}
