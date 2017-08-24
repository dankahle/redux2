import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DummyInitService {

  constructor() { }

  getAll() {
    return Observable.of('nothing')
      .delay(2000);
  }

}
