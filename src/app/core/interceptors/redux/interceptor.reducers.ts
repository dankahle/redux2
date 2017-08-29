

import {IInterceptor, INTERCEPTOR_INITIAL_STATE} from "./interceptor.model";
import {InterceptorActions} from "./interceptor.actions";

export function interceptorReducer(state: IInterceptor = INTERCEPTOR_INITIAL_STATE, action) {
  switch(action.type) {
    case InterceptorActions.AJAX_ERROR:
      return {...state, ajaxError: action.payload};
    default:
      return state;
  }
}
