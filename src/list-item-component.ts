import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'list-item',
  template: `
    {{item}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: string;

  ngOnChanges(inputChanges) {
    if (inputChanges.item) {
      console.log('ListItemComponent OnChanges', inputChanges.item);
    }
  }
}
