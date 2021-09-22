import { Injectable } from '@angular/core';
import {EnviromentService} from "../../shared/services/enviroment.service";
import {CryptoUtilsService} from "../../shared/utils/crypto-utils.service";


@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor(
    private readonly enviromentService: EnviromentService,
    private readonly cryptoUtilsService: CryptoUtilsService
  ) {
  }

  public setToken(token: string): void {
     localStorage.setItem('dG9rZW4=', this.cryptoUtilsService.encrypt(token));
  }

  public getToken(): string | null  {
    const resulStorage = localStorage.getItem('dG9rZW4=')
    if(resulStorage) {
      return this.cryptoUtilsService.decrypt(resulStorage);
    } else {
      return null;
    }
  }
}
