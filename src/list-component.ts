import {Component, ChangeDetectionStrategy, Input, Inject, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'list',
  template: `
    <ul>
      <li *ngFor="let item of list">
        <list-item [item]="item"></list-item>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() list: string[];

  ngOnChanges(inputChanges) {
    if (inputChanges.list) {
      console.log('ListComponent OnChanges', inputChanges.list);
    }
  }
}
