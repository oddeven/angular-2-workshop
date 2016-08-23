import {Component, ContentChildren, QueryList} from '@angular/core';
import {TimerSignal} from './timer-signal';

@Component({
  selector: 'timer-signal-field',
  template: `
    <button (click)="turnOn()">On</button>
    <button (click)="turnOff()">Off</button>
    <div style="border: 1px solid lightgrey; padding: 40px; display: flex">
      <ng-content select="timer-signal"></ng-content>
    </div>
  `
})
export class TimerSignalField {
  @ContentChildren(TimerSignal) timerSignals: QueryList<TimerSignal>;

  ngAfterContentInit() {
    this.turnOn();
  }

  turnOn() {
    this.timerSignals
      .forEach((timerSignal: TimerSignal) => timerSignal.start());
  }

  turnOff() {
    this.timerSignals
      .forEach((timerSignal: TimerSignal) => timerSignal.stop());
  }
}
