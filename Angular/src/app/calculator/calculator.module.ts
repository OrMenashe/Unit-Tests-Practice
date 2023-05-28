import { NgModule } from '@angular/core';
import {CalculatorComponent} from "./calculator.component";
import {SharedModule} from "../../shared/shared.module";
import {CalculatorRoutingModule} from "./calculator-routing.module";



@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CalculatorRoutingModule,
    SharedModule
  ]
})
export class CalculatorModule { }
