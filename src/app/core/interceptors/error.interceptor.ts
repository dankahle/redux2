
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {ErrorModalComponent} from "../../shared/components/error-modal/error-modal.component";
import {ProgressService} from "../services/progress.service";
import {InterceptorActions} from "./redux/interceptor.actions";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private progressService: ProgressService, private interceptorActions: InterceptorActions, public dialog: MdDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .do(event => {
      })
      .catch(err => {
        this.progressService.hideProgressBar();
        const config = <MdDialogConfig> {
          // data: {error: err.error},
          width: '300px'
        }
        this.interceptorActions.ajaxError(err.error);
        this.dialog.open(ErrorModalComponent, config);
        return Observable.of(err);
      })
  }

}



/*


class HttpResponseBase {
  headers: HttpHeaders
  status: number
  statusText: string
  url: string|null
  ok: boolean
  type: HttpEventType.Response|HttpEventType.ResponseHeader
}

class HttpResponse<T> extends HttpResponseBase {
  body: T|null
  type: Response
  clone(update: {...}): HttpResponse<any>
}

class HttpErrorResponse extends HttpResponseBase implements Error {
  name: 'HttpErrorResponse'
  message: string
  error: any|null
  ok: false
}
 */
