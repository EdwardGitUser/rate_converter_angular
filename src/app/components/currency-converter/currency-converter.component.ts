import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { ExchangeRates } from '../../models/exchange-rates.interface';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  exchangeRates: ExchangeRates = {
    rates: {},
  };

  amount: number = 0;
  convertedAmount: number = 0;

  selectedCurrency1: string = 'UAH';
  selectedCurrency2: string = 'USD';

  currencies: string[] = ['UAH', 'USD', 'EUR']; // for *ngFor options in template

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates('UAH').subscribe({
      next: (data) => {
        this.exchangeRates = data;
      },
      error: (error) => console.error('Error fetching exchange rates: ', error),
    });
  }

  convertCurrency() {
    const rate1 = this.exchangeRates.rates[this.selectedCurrency1];
    const rate2 = this.exchangeRates.rates[this.selectedCurrency2];

    this.convertedAmount = (this.amount * rate2) / rate1; // super-formula 1
    this.convertedAmount = Number(this.convertedAmount.toFixed(2)); // Limit to 3 decimal

    this.amount = (this.convertedAmount * rate1) / rate2; //super-formula 2
    this.amount = Number(this.amount.toFixed(2)); // Limit to 3 decimal
  }
}
