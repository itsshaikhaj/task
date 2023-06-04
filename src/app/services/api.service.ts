import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl1 = environment.apiUrl1;
  apiUrl2 = environment.apiUrl2;

  constructor(
    private http: HttpClient,
  ) { }

  /* Get Savings Details */
  getDetails() {
    return this.http
      .get(this.apiUrl1)
      .pipe(map((results) => results));
  }

  /* Get Transactions */
  getTransactions() {
    return this.http
      .get(this.apiUrl2)
      .pipe(map((results) => results));
  }
}
