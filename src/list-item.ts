import {Component, Input} from '@angular/core';

@Component({
  selector: 'list-item',
  template: `
    {{item}}
  `
})
export class ListItem {
  @Input() item: String;

  ngOnChanges(inputChanges) {
    if (inputChanges.item) {
      console.log('ListItem OnChanges', inputChanges.item);
    }
  }
}
