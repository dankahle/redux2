
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {InterceptorActions} from "./redux/interceptor.actions";


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private interceptorActions: InterceptorActions) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.params.get('hideSpinner') !== 'true') {
      this.interceptorActions.showProgress();
    }
    let nextReq = req.clone({params: req.params.delete('hideSpinner')});

    return next
      .handle(nextReq)
      .do(event => {
        if (event instanceof HttpResponse) {
          this.interceptorActions.hideProgress();
        }
      });
  }
}
