import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CalculatorService } from "./services/calculator.service";
import { OperationTypes } from "./enums/operation-types.enum";
import {FormBuilder, FormControl, FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit{
  readonly operationTypes = OperationTypes;
  calculatorForm: FormGroup<{
    selectedOperation: FormControl<OperationTypes>;
    firstNumber: FormControl<number>;
    secondNumber: FormControl<number>;
  }>;
  result: number | null = null;

  constructor(private formBuilder: UntypedFormBuilder, private calculatorService: CalculatorService) {}


  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      selectedOperation: [OperationTypes.Add, [Validators.required]],
      firstNumber: [0, [Validators.required]],
      secondNumber: [0, [Validators.required]],
    });
  }

  calculate(): void {
    const { selectedOperation, secondNumber, firstNumber} = this.calculatorForm.controls;
    switch (selectedOperation.value) {
      case OperationTypes.Add:
        this.result = this.calculatorService.getSum([firstNumber.value, secondNumber.value]);
        break;
      case OperationTypes.Multiply:
        this.result = this.calculatorService.getMultiple([firstNumber.value, secondNumber.value]);
        break;
    }
  }
}
