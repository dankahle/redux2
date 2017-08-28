import { Component } from '@angular/core';
import {InterceptorActions} from "./core/interceptors/redux/interceptor.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _toggleProgress = false;

  constructor() {}

}

