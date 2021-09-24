import { Injectable } from '@angular/core';
import {HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapResponseDataService {

  constructor() { }

  public mapResponse(event: HttpResponse<any>): any {
    return event.clone({body: event.body.data? event.body.data : event.body});
  }
}
