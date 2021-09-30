import { Injectable } from '@angular/core';
import {EnviromentService} from "../../shared/services/enviroment.service";
import {CryptoUtilsService} from "../../shared/utils/crypto-utils.service";
import {NavigationService} from "../../shared/services/navigation.service";
import {Paths} from "../../shared/models/path/Paths";


@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor(
    private readonly enviromentService: EnviromentService,
    private readonly cryptoUtilsService: CryptoUtilsService,
    private readonly navigationService: NavigationService
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

  public logout(): void {
    localStorage.clear();
    this.navigationService.navigate(Paths.LOGIN);
  }
}
