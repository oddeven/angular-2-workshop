import {Component} from '@angular/core';
import {CollapsibleComponent} from './collapsible-component';

@Component({
  selector: 'app',
  template: `
    <collapsible [title]="title"
                 [content]="content"
                 (opened)="onOpened($event)"
                 (closed)="onClosed($event)"></collapsible>
  `
})
export class AppComponent {
  title: string = 'Simple collapsible';
  content: string = 'This is a simple collapsible content';

  onOpened(collapsible: CollapsibleComponent) {
    console.log('Collapsible was opened', collapsible);
  }

  onClosed(collapsible: CollapsibleComponent) {
    console.log('Collapsible was closed', collapsible);
  }
}
