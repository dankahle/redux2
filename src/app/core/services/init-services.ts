import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class Init1 {
  getVal() {
    return Observable.of('one')
      .do(() => {
        // return console.log('init1');
      })
      .delay(100);
  }
}

@Injectable()
export class Init2 {
  getVal() {
    return Observable.of('two')
      .do(() => {
        // return console.log('init2');
      })
      .delay(100);
  }
}

@Injectable()
export class Init3 {
  getVal() {
    return Observable.of('three')
      .do(() => {
        // return console.log('init3');
      })
      .delay(100);
  }
}

@Injectable()
export class Init4 {
  getVal() {
    return Observable.of('four')
      .do(() => {
        // return console.log('init4');
      })
      .delay(100);
  }
}

@Injectable()
export class Init5 {
  getVal() {
    return Observable.of('five')
      .do(() => {
        // return console.log('init5');
      })
      .delay(100);
  }
}



