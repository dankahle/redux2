import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {DataCategories} from "../core/services/data-categories.service";
import {IUser} from "./redux/user.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {UserActions} from "./redux/user.actions";

@Injectable()
export class UserService {
  prefix = 'http://localhost:3005';
  instance: IUser;

  constructor(private http: HttpClient, private dataCategories: DataCategories, private userActions: UserActions) {
  }

  toUI(user) {
    this.addDc(user);
    return user;
  }

  toApi(user: IUser) {
    return this.removePropertiesForApi(user);
  }

  addDc(user) {
    return this.dataCategories.getAll()
      .map(dcs => {
        user.dc = _.find(dcs, {id: user.dcId}) || null;
      });
  }

  removePropertiesForApi (user) {
    return _.omit(user, ['dc']);
  }

  getAll() {
    this.userActions.getUsers();
    const params = new HttpParams().set('hideSpinner', 'false'); // could set this to true to hide ajax progress bar
    return <Observable<IUser[]>>this.http.get<IUser[]>(this.prefix + '/api/users', {params: params})
      .map(users => {
        const uiUsers = users.map(user => this.toUI(user));
        this.userActions.getUsersSuccess(uiUsers);
        return uiUsers;
      })
  }

  getOne(id:number): Observable<IUser> {
    this.userActions.getUser(id);
    return this.http.get<IUser>(this.prefix + '/api/users/' + id)
      .delay(200)
      .map(user => {
        const uiUser = this.toUI(user);
        this.userActions.getUserSuccess(uiUser);
        return uiUser;
      });
  }

  add(user: IUser) {
    return this.http.post<IUser>(this.prefix + '/api/users', this.toApi(user))
      .map(data => this.toUI(data));
  }

/*
  // hybrid approach2: lose the epics and push the work into service
  addUser(user): Observable<IUser> {
    this.userActions.addUser(user);
    return this.add(user)
      .map(newUser => {
        this.userActions.addUserSuccess(newUser);
        return newUser;
      });
  }
*/

  update(user: IUser) {
    return this.http.put<IUser>(this.prefix + '/api/users/' + user.id, this.toApi(user))
      .map(data => this.toUI(data));
  }

  delete(id:number) {
    return this.http.delete(this.prefix + '/api/users/' + id);
  }

}



