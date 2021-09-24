import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {IEncriptionConfig} from '../../../environments/enviroment.model';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  get vesion(): string {
    return environment.version
  }

  get cryptoConfig(): IEncriptionConfig {
    return environment.encriptionConfig
  }

  get urlApiToken(): string {
    return environment.apiToken
  }

  get urlApi(): string {
    return this.urlApi;
  }
}
