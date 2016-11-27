import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input type="text"
           [value]="value"
           [attr.aria-invalid]="error"
           [class.is-valid]="!error"
           (input)="onInput($event.target.value)">
    <button (click)="reset()">Reset</button>
    <p [innerHTML]="message"
       [style.display]="error ? 'block' : 'none'"></p>
  `
})
export class AppComponent {
  value: string = '';
  message: string = 'All is fine...';
  error: boolean = false;

  onInput(value) {
    this.value = value;
    if (this.value.length > 10) {
      this.message = 'Value is too long';
      this.error = true;
    } else {
      this.error = false;
    }
  }

  reset() {
    this.error = false;
    this.value = '';
    this.message = '';
  }
}
