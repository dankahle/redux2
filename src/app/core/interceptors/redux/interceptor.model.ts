

export interface IAjaxError {
  message: string;
  status?:number;
  json?:any;
}

export interface IInterceptor {
  showProgress: boolean;
  ajaxError: IAjaxError;
  requests: string[];
}



export const INTERCEPTOR_INITIAL_STATE: IInterceptor = <IInterceptor>{
  requests: []
}

