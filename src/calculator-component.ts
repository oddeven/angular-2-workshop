import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CalculationService} from './calculation-service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'calculator',
  template: `
    <div>
      <input [formControl]="a" type="number">
    </div>
    <div>
      <select [formControl]="operator">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
    </div>
    <div>
      <input [formControl]="b" type="number">
    </div>
    <div>
      Result: {{result | async}}
    </div>
  `
})
export class CalculatorComponent {
  result: Observable<number>;
  calculationService: CalculationService;
  a: FormControl = new FormControl();
  b: FormControl = new FormControl();
  operator: FormControl = new FormControl();

  constructor(@Inject(CalculationService) calculationService: CalculationService) {
    this.calculationService = calculationService;
    this.result = Observable
      .combineLatest(
        this.operator.valueChanges,
        this.a.valueChanges,
        this.b.valueChanges
      )
      .debounceTime(300)
      .mergeMap(values => {
        const [operator, a, b] = values;
        return this.calculationService[operator](+a, +b);
      });
  }
}
