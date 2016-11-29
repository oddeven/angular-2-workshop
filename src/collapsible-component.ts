import {Component, Input} from '@angular/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">
      <ng-content select="[collapsible-title]"></ng-content>
    </h3>
    <div [style.display]="open ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `
})
export class CollapsibleComponent {
  @Input() title: string;
  open: boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
