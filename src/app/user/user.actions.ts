

import {dispatch} from "@angular-redux/store";

export class UserActions {
  static SUBMIT = 'SUBMIT';
  static SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
  static SUBMIT_FAIL = 'SUBMIT_FAIL';

  @dispatch()
  submit() {
    return {
      type: FormActions.SUBMIT
    }
  }

  @dispatch()
  submitSuccess(payload) {
    return {
      type: FormActions.SUBMIT,
      payload
    }
  }

}
