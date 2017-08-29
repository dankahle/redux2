
import {dispatch} from "@angular-redux/store";
import {Injectable} from "@angular/core";

@Injectable()
export class InterceptorActions {
  static readonly AJAX_ERROR = "interceptor/AJAX_ERROR";

  @dispatch()
  ajaxError = (payload) => ({type: InterceptorActions.AJAX_ERROR, payload: payload});

}


