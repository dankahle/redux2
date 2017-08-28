
import {dispatch} from "@angular-redux/store";
import {Injectable} from "@angular/core";

@Injectable()
export class InterceptorActions {
  static readonly SHOW_PROGRESS = "interceptor/SHOW_PROGRESS";
  static readonly HIDE_PROGRESS = "interceptor/HIDE_PROGRESS";

  @dispatch()
  showProgress = () => ({
    type: InterceptorActions.SHOW_PROGRESS
  });

  @dispatch()
  hideProgress = () => ({
    type: InterceptorActions.HIDE_PROGRESS
  });

}


