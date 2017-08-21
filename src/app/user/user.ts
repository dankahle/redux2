import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {DataCategories} from "../core/data-categories.service";

@Injectable()
export class UserCreator {

  constructor(private http: HttpClient, private dataCategories: DataCategories) {
  }

  create(initial: object): User {
    return new User(initial, this.http, this.dataCategories);
  }
}

export class User {
  id: number;
  name: string;
  age: number;
  dc: object;
  constructor(initial: object, private http: HttpClient, private dataCategories: DataCategories) {
    _.assign(this, initial);
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



