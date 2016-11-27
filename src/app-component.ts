import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p *ngFor="let message of messages; let i = index; let even = even"
       [style.backgroundColor]="even ? 'lightgray' : null">{{i}}: {{message | charCount}}</p>
    <input #inp type="text">
    <button (click)="addMessage(inp)">Add</button>
  `
})
export class AppComponent {
  messages: string[] = ['One', 'Two', 'Three'];

  addMessage(inputElement: HTMLInputElement) {
    this.messages.push(inputElement.value);
    inputElement.value = '';
  }
}
