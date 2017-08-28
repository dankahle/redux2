

import {IInterceptor, INTERCEPTOR_INITIAL_STATE} from "./interceptor.model";
import {InterceptorActions} from "./interceptor.actions";

export function interceptorReducer(state: IInterceptor = INTERCEPTOR_INITIAL_STATE, action) {
  switch(action.type) {
    case InterceptorActions.SHOW_PROGRESS:
      return {...state, showProgress: true};
    case InterceptorActions.HIDE_PROGRESS:
      return {...state, showProgress: false};
    default:
      return state;
  }
}
