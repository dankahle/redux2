
import {dispatch} from "@angular-redux/store";
import {Injectable} from "@angular/core";

@Injectable()
export class InterceptorActions {
  static readonly SHOW_PROGRESS = "interceptor/SHOW_PROGRESS";
  static readonly HIDE_PROGRESS = "interceptor/HIDE_PROGRESS";
  static readonly AJAX_ERROR = "interceptor/AJAX_ERROR";
  static readonly REQUEST_TIMER = "interceptor/REQUEST_TIMER";

  @dispatch()
  showProgress = () => ({type: InterceptorActions.SHOW_PROGRESS});
  @dispatch()
  hideProgress = () => ({type: InterceptorActions.HIDE_PROGRESS});

  @dispatch()
  ajaxError = (payload) => ({type: InterceptorActions.AJAX_ERROR, payload: payload});

  @dispatch()
  requestTimer = (payload) => ({type: InterceptorActions.REQUEST_TIMER, payload: payload});

}


