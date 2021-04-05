import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  public sendEmail(contact: Contact): Observable<boolean> {
    const url = ``;
    const request = {};

    return this.http.post<any>(url, request).pipe((response: any) => {
      if (response) {
        return true;
      } else {
        return false;
      }
    });
  }
}
