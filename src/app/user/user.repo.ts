


import {Injectable} from "@angular/core";
import {User, UserCreator} from "./user";
import {Observable} from "rxjs/Observable";
import {UserApi} from "./user.api";

@Injectable()
export class UserRepo {

  constructor(private creator: UserCreator, private userApi: UserApi) {}

  getAll(): Observable<User[]> {
    return this.userApi.getAll()
      .map(data => data.map(user => this.creator.create(user)));
  }

  getOne(id:number, setInstance: boolean): Observable<User> {
    return this.userApi.getOne(id)
      .map(data => {
        const user = this.creator.create(data);
        this.creator.instance = user;
        return user;
      });
  }

  add(data) {
    // user the defaults set in User to set defaults before posting
    let user: User;
    if (data instanceof User) {
      user = data;
    } else {
      user = this.creator.create(data);
    }
    return this.userApi.add(user.toApi())
      .map(newUser => this.creator.create(newUser));
  }

  update(user) {
    return this.userApi.update(user.toApi());
  }

}
