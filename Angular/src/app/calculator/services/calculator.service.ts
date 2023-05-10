import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  getSum = (numbers: number[]): number => {
    let sum: number = 0;
    for (const number of numbers) {
      sum += number;
    }
    return sum;
  }

  getMultiple = (numbers: number[]): number => {
    let sum: number = 1;
    for (const number of numbers) {
      sum *= number;
    }
    return sum;
  }
}
