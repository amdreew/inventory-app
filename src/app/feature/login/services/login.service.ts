import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { LoginKeys } from '../Models/Login.keys';
import { LoginApiService } from './login-api.service';
import { Credential } from '../Models/Credential';
import { Token } from 'src/app/shared/models/Token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private readonly enviromentService: EnviromentService, private loginApiService: LoginApiService) { }
  // de aca salto al servicio de login api, envio los datos del usuario, alla retorna los datos del usuario
  public onLogin(credential: Credential): Observable<Token> {
    const params = new URLSearchParams();
    params.set(LoginKeys.USER_NAME, credential[LoginKeys.USER_NAME]);
    params.set(LoginKeys.PASSWORD, credential[LoginKeys.PASSWORD]);
    params.set(LoginKeys.GRANT_TYPE, 'password');

    return this.loginApiService.onLoginMetod(params.toString());
   }
   
   
}
