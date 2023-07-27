import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../models/exchange-rates.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(` ${this.apiUrl}${baseCurrency} `);
  }
}
