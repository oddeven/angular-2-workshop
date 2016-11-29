import {Component} from '@angular/core';

@Component({
  selector: 'timer-signal',
  template: `
    <div [style.opacity]="opacity"
         style="background-color: red; border-radius: 50%; width: 50px; height: 50px; margin: 5px"></div>
  `
})
export class TimerSignalComponent {
  opacity: number = 0;
  currentInterval: any;

  start() {
    this.currentInterval =
      setInterval(() => this.opacity = +!this.opacity, 300);
  }

  stop() {
    clearInterval(this.currentInterval);
  }
}
