import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginKeys} from './Models/Login.keys';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public readonly keys = LoginKeys;

  public readonly formLogin: FormGroup = new FormGroup({
    [this.keys.USER_NAME]: new FormControl(null, [Validators.required, Validators.email]),
    [this.keys.PASSWORD]: new FormControl(null, [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onLogin(): void {
    console.log(this.formLogin.value)
    localStorage.setItem("llave","jndcsjn")
  }

}
