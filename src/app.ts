import {Component} from '@angular/core';
import {TimerSignal} from './timer-signal';
import {TimerSignalField} from './timer-signal-field';

@Component({
  selector: 'app',
  template: `
    <timer-signal-field>
      <timer-signal></timer-signal>
      <timer-signal></timer-signal>
      <timer-signal></timer-signal>
      <timer-signal></timer-signal>
      <timer-signal></timer-signal>
    </timer-signal-field>
  `,
  directives: [TimerSignal, TimerSignalField]
})
export class App {

}
