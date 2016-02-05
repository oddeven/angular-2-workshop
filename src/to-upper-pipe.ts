import {Pipe} from '@angular/core';

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe {
  transform(value) {
    return value.toUpperCase();
  }
}
