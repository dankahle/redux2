

export interface IAjaxError {
  message: string;
  status?:number;
  json?:any;
}

export interface IInterceptor {
  ajaxError: IAjaxError;
}



export const INTERCEPTOR_INITIAL_STATE: IInterceptor = <IInterceptor>{}

