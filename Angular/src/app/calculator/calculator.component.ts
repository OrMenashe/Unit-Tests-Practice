import { Component } from '@angular/core';
import { CalculatorService } from "./services/calculator.service";
import { OperationTypes } from "./enums/operation-types.enum";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  readonly operationTypes = OperationTypes;
  selectedOperation: OperationTypes | null = null;
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number | null = null;

  constructor(private calculatorService: CalculatorService) {}

  calculate(): void {
    switch (this.selectedOperation) {
      case OperationTypes.Add:
        this.result = this.calculatorService.add(this.firstNumber, this.secondNumber);
        break;
      case OperationTypes.Multiply:
        this.result = this.calculatorService.multiply(this.firstNumber, this.secondNumber);
        break;
    }
  }
}
