import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {UserComponent} from "../user/user.component";
import {IUser} from "../user.model";

@Component({
  selector: 'dk-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  formObj: IUser = <IUser>{};

  constructor(private router: Router, private userService: UserService, private parent: UserComponent) { }

  cancel() {
   this.router.navigateByUrl('/user');
  }

  addUser() {
    this.userService.add(this.formObj)
      .subscribe(newUser => this.parent.refresh());
    this.router.navigateByUrl('/user');
  }

  prevent(e) {
    e.preventDefault();
  }

}
