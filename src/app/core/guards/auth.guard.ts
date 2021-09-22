import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreManageServiceService } from '../services/store-manage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly storeManageServiceService: StoreManageServiceService,
    private readonly router: Router){

  }

  canActivate():boolean  {

    if(this.storeManageServiceService.getToken()){
      return true;
    }
    else{
      this.router.navigate(['login']);
    }

    return true;
  }
  
}
