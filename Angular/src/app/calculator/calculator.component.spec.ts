import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {CalculatorService} from "./services/calculator.service";
import {DomTestingService} from "../helpers/dom-testing.service";
import {provideMock, Spied} from "../helpers/provide-mock";


const dataTests = {
  title: '[data-test="calculator-title"]',
  firstNumberInput: '[data-test="first-number-input"]',
  secondNumberInput: '[data-test="second-number-input"]',
  calculateButton: '[data-test="calculate-button"]',
  result: '[data-test="result"]',
};

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let domTestingService: DomTestingService;
  let calculatorServiceMock: Spied<CalculatorService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      providers: [provideMock(CalculatorService)],
      imports: [SharedModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    domTestingService = new DomTestingService(fixture);
    component = fixture.componentInstance;
    calculatorServiceMock = TestBed.inject(CalculatorService);
  });

  describe('Component finished rendering', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should show title', () => {
      expect(domTestingService.getElement(dataTests.title)).toBeTruthy();
    });

    it('first number input should be 0', () => {
      expect(domTestingService.getElement(dataTests.firstNumberInput).value).toBe('0');
    })

    it('second number input should be 0', () => {
      expect(domTestingService.getElement(dataTests.firstNumberInput).value).toBe('0');
    })
  });
});
