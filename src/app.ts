import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>{{message}}</p>
  `
})
export class App {
  message: String = 'Hello World!';
}
