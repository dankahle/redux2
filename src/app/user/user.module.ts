import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./components/user.component";
import {AppModule} from "../app.module";
import {CoreModule} from "../core/core.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule { }
