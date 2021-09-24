import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnviromentService} from "../../../shared/services/enviroment.service";
import {Observable} from "rxjs";
import {Contact} from "../model/Contact";

@Injectable()
export class ContactApiService {

  private URL = `${this.enviromentService.urlApi}/contact`;
  constructor(
    private readonly http: HttpClient,
    private readonly enviromentService: EnviromentService
    ) { }

  public getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.URL);
  }
}
