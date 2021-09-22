import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Token} from "../../../shared/models/Token";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EnviromentService} from "../../../shared/services/enviroment.service";
import {map} from "rxjs/operators";

@Injectable()
export class LoginApiService {
  private readonly URL = this.enviromentService.urlApiToken;
  private readonly credentialApp = btoa('angularapp' + ':' + 'pass')
  private readonly headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+this.credentialApp});
  constructor(
    private readonly enviromentService: EnviromentService,
    private  readonly http: HttpClient
  ) { }

  public onLogin(params: string): Observable<Token> {
    return this.http.post<Token>(this.URL, params, {headers: this.headers})
      .pipe(
        map((res: Token) => {
          return res;
        })
      );
  }
}
