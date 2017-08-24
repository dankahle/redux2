import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataCategories {

  constructor() { }

  getAll() {
    return Observable.of([
      {id: 1, name: 'Shipment'},
      {id: 2, name: 'Purchase'},
    ]);
  }

}
