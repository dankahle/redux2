import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {IAjaxError} from "../../../core/interceptors/redux/interceptor.model";
import {select} from "@angular-redux/store";

@Component({
  selector: 'dk-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {
  @select(['interceptor', 'ajaxError']) ajaxError$: Observable<IAjaxError>;
  error: IAjaxError;
  constructor(public dialogRef: MdDialogRef<ErrorModalComponent>) {
    this.ajaxError$.subscribe(ajaxError => {
      this.error = ajaxError;
      this.processError();
    })
  }

  processError() {
    if (this.error.status >= 500) {
      this.error = {message: 'Well, this is embarrassing.'}
    }
  }

}
