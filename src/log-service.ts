import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class LogService {
  static globalLoggerNr: number = 0;
  logs: Subject<string> = new Subject();
  loggerNr: number;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message: string) {
    setTimeout(() => {
      const formatted: string = `Logger(${this.loggerNr}): ${message}`;
      console.log(formatted);
      this.logs.next(formatted);
    }, 1000);
  }
}
