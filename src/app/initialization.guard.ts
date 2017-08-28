import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';
import {Init1, Init2, Init3, Init4, Init5} from "./core/services/init-services";
import {merge} from "rxjs/observable/merge";
import {IInitialize} from "./core/initialize/initialize.model";
import {NgRedux, select} from "@angular-redux/store";
import {InitializeActions} from "./core/initialize/initialize.actions";
import {IAppState} from "./store/store.model";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/first';

@Injectable()
export class InitializationGuard implements CanActivate {
  initialize: IInitialize;
  @select('initialize') initialize$: Observable<IInitialize>;
  subject: Subject<boolean>;

  constructor(
    private initializeActions: InitializeActions, ngRedux: NgRedux<IAppState>) {
    this.initialize$.subscribe(initialize => {
      this.initialize = initialize;

      if (this.subject) {
        if (this.initialize.success) {
          this.subject.next(true);
        } else if (this.initialize.failure) {
          this.subject.next(false);
        }
      }
    });
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

  canActivateChild(next: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

    init() {
      if (this.initialize.initialized) {
        return true;
      } else if (this.initialize.initializing) {
        return false;
      }
      this.initializeActions.initialize();
      this.subject = new Subject<boolean>()
      return this.subject.first();
    }

}
