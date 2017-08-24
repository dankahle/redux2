import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {DummyInitService} from "./core/dummy-init.service";


@Injectable()
export class InitializationGuard implements CanActivate {
  initialized = false;

  constructor(private dummyInitService: DummyInitService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

  init() {
    if (this.initialized) {
      return true;
    }
    console.log('init guard start');
    return Observable.forkJoin(this.dummyInitService.getAll())
      .map(() => {
        console.log('init guard end');
        this.initialized = true;
        return true;
      });
  }
}
