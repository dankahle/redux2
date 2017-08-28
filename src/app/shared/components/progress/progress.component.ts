import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
show = false;
value = 0;
timer = null;
@select(['interceptor', 'showProgress']) showProgress$: Observable<boolean>;

  constructor() {
    this.showProgress$.subscribe(show => {
      if (show) {
        this.show = true;
        this.value = 0;
        this.timer = setInterval(() => {
          if (this.value < 101) {
            this.value += 1;
          }
        }, 100);
      } else {
        this.show = false;
        clearInterval(this.timer);
      }
    })
  }

}
