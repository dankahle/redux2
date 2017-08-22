import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {User} from "./user";
import {Http} from "@angular/http";

@Injectable()
export class UserApi {
  prefix = 'http://localhost:3005';

  constructor(private http: Http, private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<User[]>(this.prefix + '/api/users');
  }

  getOne(id:number) {
    return this.httpClient.get<User>(this.prefix + '/api/users/' + id);
  }

  add(user: User) {
    return this.httpClient.post<User>(this.prefix + '/api/users', user);
  }

  update(user: User) {
    return this.httpClient.put<User>(this.prefix + '/api/users/' + user.id, user);
  }

  delete(id:number) {
    return this.httpClient.delete(this.prefix + '/api/users/' + id);
  }

}




