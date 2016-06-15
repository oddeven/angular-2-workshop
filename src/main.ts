import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: `
    <p>{{message}}</p>
  `
})
export class App {
  message: String  = 'Hello World!';
}

bootstrap(App);
