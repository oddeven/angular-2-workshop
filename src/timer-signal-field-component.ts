import {Component, ContentChild} from '@angular/core';
import {TimerSignalComponent} from './timer-signal-component';

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
export class TimerSignalFieldComponent {
  @ContentChild(TimerSignalComponent) timerSignal: TimerSignalComponent;
  isOn: boolean;

  ngAfterContentInit() {
    this.turnOn();
  }

  turnOn() {
    if(!this.isOn) {
      this.timerSignal.start();
      this.isOn = true;
    }
  }

  turnOff() {
    this.timerSignal.stop();
    this.isOn = false;
  }
}
