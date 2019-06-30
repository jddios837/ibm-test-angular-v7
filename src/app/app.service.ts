import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPrimaryKey() {
    return this.http.get(`${this.url + '/auth'}`)
			.pipe(
				map((response: any) => {
					return response;
				})
			);
  }
}
