import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'
import {EnviromentService} from "../services/enviroment.service";

@Injectable({
  providedIn: 'root'
})
export class CryptoUtilsService {
  private readonly key: string;
  constructor(
    private readonly env: EnviromentService
  ) {
    this.key = this.env.cryptoConfig.encriptionKey
  }

  public encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.key).toString()
  }

  public decrypt(dataEncrypt: string): string {
    return CryptoJS.AES.decrypt(dataEncrypt, this.key).toString(CryptoJS.enc.Utf8)
  }

}
