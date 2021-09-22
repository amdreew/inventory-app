import { Injectable } from '@angular/core';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { CryptoUtilsService } from 'src/app/shared/utils/crypto-utils.service';

@Injectable({
  providedIn: 'root'
})
export class StoreManageServiceService {

  constructor(
              private readonly enviromentService: EnviromentService, 
              private readonly cryptoUtilsService: CryptoUtilsService) { 
  
  }

  public setToken(token: string): void{
    localStorage.setItem('key', this.cryptoUtilsService.encrypt(token))
    //this.secureLS.set('key',token)
  }

  public getToken(): string | null {
    const resultStorage = localStorage.getItem('key');

    if(resultStorage){
      return this.cryptoUtilsService.decrypt(resultStorage);
    }
    else{
      return '';
    }

    
    //return localStorage.getItem('key')
    //return localStorage.getItem('key')
    //return this.secureLS.get('key')
  }
}
