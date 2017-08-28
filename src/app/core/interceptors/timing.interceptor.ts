import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {InterceptorActions} from "./redux/interceptor.actions";
import {Injectable} from "@angular/core";

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  constructor(private interceptorActions: InterceptorActions) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          this.interceptorActions.requestTimer(`${req.urlWithParams} ${elapsed} ms`);
          // console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      });
  }
}
