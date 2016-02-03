<<<<<<< HEAD
import {Component} from '@angular/core';
=======
import {Component} from 'angular2/core';
>>>>>>> Added injection for calculator service
import {Calculator} from './calculator';

@Component({
  selector: 'app',
  template: `
    <calculator></calculator>
  `,
  directives: [Calculator]
})
export class App {}
