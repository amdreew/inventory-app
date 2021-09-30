import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor, HttpProgressEvent,
  HttpRequest, HttpResponse,
  HttpSentEvent, HttpUserEvent
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {StorageManagerService} from "../services/storage-manager.service";
import {MapResponseDataService} from "../services/map-response-data.service";
import {catchError, map} from "rxjs/operators";
import {ErrorHttpManagerService} from "../services/error-http-manager.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor{

  constructor(
    private readonly storage: StorageManagerService,
    private readonly mapResponseDataService: MapResponseDataService,
    private readonly errorHttpManagerService: ErrorHttpManagerService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<| HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(this.addToken(req)).pipe(
      map((event: HttpEvent<any>) => {
        if(event instanceof  HttpResponse) {
          return this.mapResponseDataService.mapResponse(event)
        }
      }),
      // @ts-ignore
      catchError((error) => {
        if(error instanceof HttpErrorResponse) {
          this.errorHttpManagerService.handleError(error);
          return throwError(error);
        }
      })
    )
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    const token: string | null = this.storage.getToken();
    if(token) {
      return req.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
    } else {
      return req
    }
  }
}
