import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {InitializationGuard} from "./initialization.guard";
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {UserService} from "./user/user.service";
import {UserResolve} from "./user/user.resolve";

const appRoutes: Routes = [
  { path: '',   redirectTo: '/user', pathMatch: 'full', canActivate: [InitializationGuard] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    SharedModule,
    UserModule
  ],
  providers: [InitializationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
