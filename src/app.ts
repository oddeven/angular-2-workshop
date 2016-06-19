import {Component} from '@angular/core';
import {Calculator} from './calculator';

@Component({
  selector: 'app',
  template: `
    <calculator></calculator>
  `,
  directives: [Calculator]
})
export class App {}
