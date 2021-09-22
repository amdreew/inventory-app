import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StoreManageServiceService } from 'src/app/core/services/store-manage-service.service';
import { Paths } from 'src/app/shared/models/path/Paths';
import { LoginKeys } from './Models/Login.keys';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public readonly keys = LoginKeys;

  public readonly formLogin: FormGroup = new FormGroup({
    [this.keys.USER_NAME]: new FormControl(null, [Validators.required]),
    [this.keys.PASSWORD]: new FormControl(null, [Validators.required]),
  });

  constructor(private readonly storageManageService: StoreManageServiceService, 
              private readonly loginService: LoginService,
              private readonly router: Router ) { }

  ngOnInit(): void {
    this.validarToken();
  }

  validarToken(){
    if(this.storageManageService.getToken()){
      this.router.navigate([Paths.CONTACT]);
    }
  }

  public onLogin(): void {

console.log(this.formLogin.value)
    this.loginService.onLogin({    
      [LoginKeys.USER_NAME]: this.formLogin.get([LoginKeys.USER_NAME])?.value,
      [LoginKeys.PASSWORD]: this.formLogin.get([LoginKeys.PASSWORD])?.value,

     }).subscribe(res=>{
       this.storageManageService.setToken(res.access_token);
       this.router.navigate([Paths.CONTACT])
     })
  }

  


}
