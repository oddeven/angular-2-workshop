import {Injectable} from '@angular/core';

@Injectable()
export class LogService {
  static globalLoggerNr: number = 0;
  loggerNr: number;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message: string) {
    setTimeout(() => {
      console.log(`Logger(${this.loggerNr}): ${message}`);
    }, 1000);
  }
}
