import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }
}
