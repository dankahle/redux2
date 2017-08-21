import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {User} from "./user";

@Injectable()
export class UserApi {
  prefix = 'http://localhost:3005';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.prefix + '/api/users');
  }

  getOne(id:number) {
    return this.http.get<User>(this.prefix + '/api/users/' + id);
  }

  add(user: User) {
    return this.http.post<User>(this.prefix + '/api/users', user);
  }

  update(user: User) {
    return this.http.put<User>(this.prefix + '/api/users/' + user.id, user);
  }

  delete(id:number) {
    return this.http.delete<User>(this.prefix + '/api/users/' + id);
  }

}




