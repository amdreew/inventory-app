import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Contact} from "../model/Contact";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ContactService {

  private URL = `http://127.0.0.1:9090/api/contact`;
  constructor(
    private readonly http: HttpClient,
  ) { }

  public getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.URL);
  }

  public update(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.URL, contact);
  }
  public save(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.URL, contact);
  }

  public deletedContact(id: number): Observable<string> {
    return this.http.delete<string>(`${this.URL}/${id}`);
  }




}
