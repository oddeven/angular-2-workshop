import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>{{message}}</p>
  `
})
export class AppComponent {
  message: string = 'Hello World!';
}
