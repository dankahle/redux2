import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {DataCategories} from "../core/data-categories.service";
import {UserApi} from "./user.api";
import {UserRepo} from "./user.repo";

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

}

export class User {
  id?: number;
  name?: string;
  age?: number;
  dc: object;
  constructor(initial: object, private http: HttpClient, private dataCategories: DataCategories, private userApi: UserApi) {
    _.assign(this, initial);
    this.fromApi();
  }

  // transform object for post/put to api
  toApi() {
    return _.omit(_.clone(this), ['http', 'dataCategories', 'userApi', 'userRepo']);
  }

  // transform object from api
  fromApi() {
  }

  toJSON() {
    return this.toApi()
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



