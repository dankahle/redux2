import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {User, UserCreator} from "./user";

@Injectable()
export class UserApi {
  prefix = 'http://localhost:3005';

  constructor(private http: HttpClient, private userCreator: UserCreator) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.prefix + '/api/users')
      .map(data => data.map(user => this.userCreator.create(user)));
  }

  getOne(id:number): Observable<User> {
    return this.http.get<User>(this.prefix + '/api/users/' + id)
      .map(user => this.userCreator.create(user));
  }

}




