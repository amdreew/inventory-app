import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {CryptoUtilsService} from "../utils/crypto-utils.service";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private readonly router: Router,
    private readonly cryptoUtilsService: CryptoUtilsService
  ) { }

  public async navigate(route: string, params?: string): Promise<any> {
    if(params) {
      await this.router.navigate([route, this.cryptoUtilsService.encrypt(params)]);
    } else {
      await this.router.navigate([route]);
    }
  }
}
