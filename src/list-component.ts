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
  previousLength: number = 0;
  changeDetectorRef: ChangeDetectorRef;

  constructor(@Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngDoCheck() {
    if (this.list.length !== this.previousLength) {
      console.log('List Do Check: Detected change');
      this.changeDetectorRef.markForCheck();
      this.previousLength = this.list.length;
    } else {
      console.log('List Do Check: No change');
    }
  }
}
