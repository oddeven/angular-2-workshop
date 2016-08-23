import {Component} from '@angular/core';
import {Collapsible} from './collapsible';

@Component({
  selector: 'app',
  template: `
    <collapsible [title]="title">
      <p>I'm regular content that will be inserted into the collapsible body</p>
    </collapsible>
  `,
  directives: [Collapsible]
})
export class App {
  title = 'Simple collapsible';
}
