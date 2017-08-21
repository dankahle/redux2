import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./components/user.component";
import {UserApi} from "./user.api";
import {UserCreator} from "./user";
import {AppModule} from "../app.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [UserApi, UserCreator],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule { }
