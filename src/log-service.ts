import {Injectable} from '@angular/core';

@Injectable()
export class LogService {
  static globalLoggerNr: number = 0;
  loggerNr: number;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message: string) {
    console.log(`Logger(${this.loggerNr}): ${message}`);
  }
}
