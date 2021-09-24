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
import {Observable} from "rxjs";
import {StorageManagerService} from "../services/storage-manager.service";
import {MapResponseDataService} from "../services/map-response-data.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor{

  constructor(
    private readonly storage: StorageManagerService,
    private readonly mapResponseDataService: MapResponseDataService
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<| HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(this.addToken(req)).pipe(
      map((event: HttpEvent<any>) => {
        if(event instanceof  HttpResponse) {
          return this.mapResponseDataService.mapResponse(event)
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
