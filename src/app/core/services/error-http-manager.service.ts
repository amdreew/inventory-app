import { Injectable } from '@angular/core';
import {AlertService} from "../../shared/services/alert.service";
import {StorageManagerService} from "./storage-manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpErrorsCode} from "../../shared/class/HttpErrorsCode";
import {HttpErrorMessages} from "../../shared/class/HttpErrorsMessage";

@Injectable({
  providedIn: 'root'
})
export class ErrorHttpManagerService {
  private ERROR_MESSAGES = new Map<number, string>();
  constructor(
    private readonly alert: AlertService,
    private readonly storageManagerService: StorageManagerService
    ) {
    this.loadMessages();
  }

  private loadMessages(): void {
    this.ERROR_MESSAGES.set(HttpErrorsCode.BAD_REQUEST, HttpErrorMessages.BAD_REQUEST);
    this.ERROR_MESSAGES.set(HttpErrorsCode.UNAUTHORIZED, HttpErrorMessages.UNAUTHORIZED);
    this.ERROR_MESSAGES.set(HttpErrorsCode.FORBIDDEN, HttpErrorMessages.FORBIDDEN);
    this.ERROR_MESSAGES.set(HttpErrorsCode.NOT_FOUND, HttpErrorMessages.NOT_FOUND);
    this.ERROR_MESSAGES.set(HttpErrorsCode.METHOD_NOT_ALLOWED, HttpErrorMessages.METHOD_NOT_ALLOWED);
    this.ERROR_MESSAGES.set(HttpErrorsCode.REQUEST_TIMEOUT, HttpErrorMessages.REQUEST_TIMEOUT);
    this.ERROR_MESSAGES.set(HttpErrorsCode.INTERNAL_SERVER_ERROR, HttpErrorMessages.INTERNAL_SERVER_ERROR);
    this.ERROR_MESSAGES.set(HttpErrorsCode.UNKNOWN, HttpErrorMessages.UNKNOWN);
  }

  public handleError(error: HttpErrorResponse): void {
    if(error.status === 401) {
      this.alert.viewWarning('El token ha expidado por favor autentiquese nuevamente', 'Disculpa!').then(() => {
        this.storageManagerService.logout();
      })
    } else {
      this.alert.viewError(this.ERROR_MESSAGES?.get(error.status), 'Disculpa!').then();
    }
  }
}
