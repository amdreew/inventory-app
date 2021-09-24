import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./core/guards/auth.guard";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpInterseptorService} from "./core/interseptor/http-interseptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterseptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
