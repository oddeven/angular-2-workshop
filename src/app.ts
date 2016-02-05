import {Component} from '@angular/core';
import {BlacklistPipe} from './blacklist-pipe';

@Component({
  selector: 'app',
  template: `
    <p *ngFor="let message of messages; let i = index">{{i}}: {{message | blacklist}}</p>
    <input #inp type="text">
    <button (click)="addMessage(inp)">Add</button>
  `,
  pipes: [BlacklistPipe]
})
export class App {
  messages: Array<String> = ['One', 'Two', 'Three'];

  addMessage(inputElement: HTMLInputElement) {
    this.messages.push(inputElement.value);
    inputElement.value = '';
  }
}
