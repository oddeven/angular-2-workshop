import {Component} from '@angular/core';
import {Collapsible} from './collapsible';

@Component({
  selector: 'app',
  template: `
    <collapsible [title]="title"
                 [content]="content"
                 (opened)="onOpened($event)"
                 (closed)="onClosed($event)"></collapsible>
  `,
  directives: [Collapsible]
})
export class App {
  title: String = 'Simple collapsible';
  content: String = 'This is a simple collapsible content';

  onOpened(collapsible: Collapsible) {
    console.log('Collapsible was opened', collapsible);
  }

  onClosed(collapsible: Collapsible) {
    console.log('Collapsible was closed', collapsible);
  }
}
