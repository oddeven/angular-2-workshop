import {Component} from '@angular/core';
import {ToUpperPipe} from './to-upper-pipe';

@Component({
  selector: 'app',
  template: `
    <p *ngFor="let message of messages; let i = index">{{i}}: {{message | toUpper}}</p>
    <input #inp type="text">
    <button (click)="addMessage(inp.value)">Add</button>
  `,
  pipes: [ToUpperPipe]
})
export class App {
  messages: Array<String> = ['One', 'Two', 'Three'];

  addMessage(message: String) {
    this.messages.push(message);
  }
}
