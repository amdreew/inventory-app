import { Injectable } from '@angular/core';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class StoreManageServiceService {
  private secureLS : SecureLS;
  constructor(private readonly enviromentService: EnviromentService) { 

    this.secureLS= new SecureLS(
      {
        encodingType: this.enviromentService.cryptoConfig.encriptionType.base46,
        encryptionSecret: this.enviromentService.cryptoConfig.encriptionKey,
        isCompression: true,
      });
  }

  public setToken(token: string): void{
    this.secureLS.set('key',token)
  }

  public getToken(): string{
    return this.secureLS.get('key')
  }
}
