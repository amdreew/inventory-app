import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageManagerService} from "../services/storage-manager.service";
import {Paths} from "../../shared/models/path/Paths";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly storageManagerService: StorageManagerService,
    private readonly router: Router
    ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storageManagerService.getToken()) {
      return true;
    }
    this.router.navigate([Paths.LOGIN]);
    return false;
  }

}
