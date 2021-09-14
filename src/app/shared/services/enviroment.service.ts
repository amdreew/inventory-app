import { Injectable } from '@angular/core';
import { IEncriptionConfig } from 'src/environments/enviroment.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  get vesion(): string {
    return environment.version
  }

  get cryptoConfig (): IEncriptionConfig {
    return environment.encriptionConfig
  }
}
