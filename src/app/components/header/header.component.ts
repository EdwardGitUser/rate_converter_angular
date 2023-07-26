import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { ExchangeRates } from '../../models/exchange-rates.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date();

  exchangeRates: ExchangeRates = {
    rates: {},
  };

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates('UAH').subscribe({
      next: (data) => {
        this.exchangeRates = data;
      },
      error: (error) => console.error('Error fetching exchange rates: ', error),
    });
  }
}
