import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">{{title}}</h3>
    <div [style.display]="open ? 'block' : 'none'">
      {{content}}
    </div>
  `
})
export class CollapsibleComponent {
  @Input() title: string;
  @Input() content: string;
  @Output() opened: EventEmitter = new EventEmitter();
  @Output() closed: EventEmitter = new EventEmitter();
  open: boolean = false;

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.opened.emit(this);
    } else {
      this.closed.emit(this);
    }
  }
}
