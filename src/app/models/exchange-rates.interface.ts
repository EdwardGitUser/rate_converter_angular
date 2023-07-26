export interface ExchangeRates {
  rates: {
    [currencyName: string]: number; // наприклад 'UAH': 1
  };
}
