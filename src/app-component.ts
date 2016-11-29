import {Component, Inject} from '@angular/core';
import {LogService} from './log-service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app',
  template: `
    <calculator></calculator>
    <div>{{logs | async}}</div>
  `
})
export class AppComponent {
  logs: Observable<string>;

  constructor(@Inject(LogService) logService: LogService) {
    this.logs = logService.logs;
    logService.log('Application started');
  }
}
