import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <collapsible [title]="title">
      <p>I'm regular content that will be inserted into the collapsible body</p>
    </collapsible>
  `
})
export class AppComponent {
  title: string = 'Simple collapsible';
}
