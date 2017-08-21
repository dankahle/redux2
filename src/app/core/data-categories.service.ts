import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';

@Injectable()
export class DataCategories {

  constructor() { }

  getAll() {
    return of([
      {id: 1, name: 'Shipment'},
      {id: 2, name: 'Purchase'},
    ])
  }

}
