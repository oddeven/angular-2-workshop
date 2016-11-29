import {Component} from '@angular/core';
import {CollapsibleComponent} from './collapsible-component';

@Component({
  selector: 'app',
  template: `
    <collapsible [content]="content" (opened)="onOpened($event)"></collapsible>
  `
})
export class AppComponent {
  content: string = 'This is a simple collapsible content';

  onOpened(collapsible: CollapsibleComponent) {
    console.log('Collapsible was opened', collapsible);
  }
}
