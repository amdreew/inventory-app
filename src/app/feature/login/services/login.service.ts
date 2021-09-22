import {Injectable} from '@angular/core';
import {Creadential} from "../models/Creadential";
import {Observable} from "rxjs";
import {Token} from "../../../shared/models/Token";
import {LoginKeys} from "../models/Login.keys";
import {LoginApiService} from "./login-api.service";

@Injectable()
export class LoginService {

  constructor(
    private readonly loginApiService: LoginApiService
  ) { }

  public onLogin(creadential: Creadential): Observable<Token> {
    const params = new URLSearchParams();
    params.set(LoginKeys.USER_NAME, creadential[LoginKeys.USER_NAME]);
    params.set(LoginKeys.PASSWORD, creadential[LoginKeys.PASSWORD]);
    params.set(LoginKeys.GRANT_TYPE, 'password');
    return this.loginApiService.onLogin(params.toString());
  }

}
