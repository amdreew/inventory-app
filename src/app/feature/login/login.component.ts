import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginKeys} from './models/Login.keys';
import {StorageManagerService} from "../../core/services/storage-manager.service";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";
import {Paths} from "../../shared/models/path/Paths";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public readonly keys = LoginKeys;

  public readonly formLogin: FormGroup = new FormGroup({
    [this.keys.USER_NAME]: new FormControl(null, [Validators.required]),
    [this.keys.PASSWORD]: new FormControl(null, [Validators.required, Validators.min(8)]),
  });

  constructor(
    private readonly storageManagerService: StorageManagerService,
    private readonly loginService: LoginService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.validateToken()
  }

  private validateToken(): void {
    if (this.storageManagerService.getToken()) {
      this.router.navigate([Paths.CONTACT]);
    }
  }

  public onLogin(): void {
    this.loginService.onLogin({
      [LoginKeys.USER_NAME]: this.formLogin.get([LoginKeys.USER_NAME])?.value,
      [LoginKeys.PASSWORD]: this.formLogin.get([LoginKeys.PASSWORD])?.value,
    }).subscribe(res => {
      this.storageManagerService.setToken(res.access_token);
      this.router.navigate([Paths.CONTACT]);
    });
  }

}
