import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'collapsible',
  template: `
    <h3 (click)="toggle()">Collapsible click to open</h3>
    <div [style.display]="open ? 'block' : 'none'">
      {{content}}
    </div>
  `
})
export class CollapsibleComponent {
  @Input() content: string;
  @Output() opened: EventEmitter = new EventEmitter();
  open: boolean = false;

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.opened.emit(this);
    }
  }
}
