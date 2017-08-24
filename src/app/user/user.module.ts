import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./user/user.component";
import {AppModule} from "../app.module";
import {CoreModule} from "../core/core.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserService} from "./user.service";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserResolve} from "./user.resolve";
import {InitializationGuard} from "../initialization.guard";

export const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [InitializationGuard],
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    canActivate: [InitializationGuard],
    resolve: {
      user: UserResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [UserService, UserResolve],
  declarations: [UserComponent, UserDetailComponent],
  exports: [UserComponent, RouterModule],
})
export class UserModule { }
