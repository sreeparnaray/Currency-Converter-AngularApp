import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  fromCurrency = ''; // Initialize with an empty string
  toCurrency = ''; // Initialize with an empty string
  amount!: number; // Initialize as null
  convertedValue: number | null = null; // Initialize as null
  //currencies: string[] = ['USD', 'INR', 'GBP']; // Add more currencies as needed

  

  exchangeRates = [
    { id: 'USD', value: 1.126735 },
    { id: 'GBP', value: 0.876893 },
    { id: 'INR', value: 79.677056 }
  ];

  convertCurrency() {
    const sourceRate = this.exchangeRates.find(rate => rate.id === this.fromCurrency);
    const targetRate = this.exchangeRates.find(rate => rate.id === this.toCurrency);

    if (sourceRate && targetRate) {
      this.convertedValue = (this.amount / sourceRate.value) * targetRate.value;
    } else {
      this.convertedValue = null;
    }
  }
}
