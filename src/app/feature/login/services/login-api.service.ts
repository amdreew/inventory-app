import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/app/shared/models/Token';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable()
export class LoginApiService {

  private readonly URL = this.enviromentService.urlApiToken;
  private readonly credentialApp = btoa('angularapp' + ':' + 'pass')
  private readonly headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+this.credentialApp});
  constructor(
   private readonly enviromentService: EnviromentService, private  readonly http: HttpClient)
  { 
    
  }
//params : usuario y password
public onLoginMetod(params: string): Observable<Token> {
 return this.http.post<Token>(this.URL, params, {headers: this.headers})
   .pipe(
     map((res: Token) => {
       return res;
     })
   );
  }
  
  
  
}
