import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./components/user.component";
import {UserApi} from "./user.api";
import {UserCreator} from "./user";
import {AppModule} from "../app.module";
import {CoreModule} from "../core/core.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserActions} from "./user.actions";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserApi, UserActions],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule { }
