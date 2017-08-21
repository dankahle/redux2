import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {DataCategories} from "../core/data-categories.service";
import {UserApi} from "./user.api";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserCreator {

  constructor(private http: HttpClient, private dataCategories: DataCategories, private userApi: UserApi) {
  }

  create(initial: object): User {
    return new User(initial, this.http, this.dataCategories, this.userApi);
  }

  getAll(): Observable<User[]> {
    return this.userApi.getAll()
      .map(data => data.map(user => this.create(user)));
  }

  getOne(id:number): Observable<User> {
    return this.userApi.getOne(id)
      .map(user => this.create(user));
  }

}

export class User {
  static instance: User;
  id: number;
  name: string;
  age: number;
  dc: object;
  constructor(
    initial: object,
    private http: HttpClient,
    private dataCategories: DataCategories,
    private userApi: UserApi) {
    _.assign(this, initial);
  }

  static setInstance(user: User) {
    User.instance = user;
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

  add() {
    this.userApi.add(this.toObject())
      .subscribe(newUser => _.assign(this, newUser));//dankfix: verify it gets the id on post
  }

  update() {
    this.userApi.update(this.toObject())
      .subscribe(newUser => _.assign(this, newUser));//dankfix: verify it gets updates
  }

}



