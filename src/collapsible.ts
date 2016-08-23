import {Component, Input} from '@angular/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">{{title}}</h3>
    <div [style.display]="open ? 'block' : 'none'">
      <ng-content></ng-content>
    </div>
  `
})
export class Collapsible {
  @Input() title: String;
  open: Boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
