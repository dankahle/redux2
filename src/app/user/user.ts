import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {DataCategories} from "../core/data-categories.service";
import {UserApi} from "./user.api";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserCreator {
  instance: User;
  constructor(private http: HttpClient, private dataCategories: DataCategories, private userApi: UserApi) {
  }

  create(initial: object): User {
    return new User(initial, this.http, this.dataCategories, this.userApi);
  }

  setInstance(user) {
    if (user.subscribe) {
      user.subscribe(u => this.instance = u);
    } else {
      this.instance = user;
    }
  }

  getAll(): Observable<User[]> {
    return this.userApi.getAll()
      .map(data => data.map(user => this.create(user)));
  }

  getOne(id:number, setInstance: boolean): Observable<User> {
    return this.userApi.getOne(id)
      .map(data => {
        const user = this.create(data);
        this.instance = user;
        return user;
      });
  }

  add(data) {
    // user the defaults set in User to set defaults before posting
    let user: User;
    if (data instanceof User) {
      user = data;
    } else {
      user = this.create(data);
    }
    return this.userApi.add(user.toObject())
      .map(newUser => this.create(newUser));
  }

  update(user) {
    return this.userApi.update(user.toObject());
  }
}

export class User {
  id?: number;
  name?: string;
  age?: number;
  dc: object;
  constructor(
    initial: object,
    private http: HttpClient,
    private dataCategories: DataCategories,
    private userApi: UserApi) {
    _.assign(this, initial);
  }

  toObject() {
    return _.omit(this, ['http', 'dataCategories', 'userApi']);
  }

  toJSON() {
    return this.toObject()
  }

  incAge(inc:number) {
    this.age += inc;
  }

  getDc(dcid) {
    this.dataCategories.getAll()
      .subscribe(dcs => {
        this.dc = _.find(dcs, {name:'Purchase'});
      })
  }

}



