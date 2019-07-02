import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  saveUser(data: any) {
    return this.http.post(this.url + '/user', data);
  }
}
