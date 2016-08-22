import {Pipe} from '@angular/core';

@Pipe({
  name: 'charCount'
})
export class ChartacterCountPipe {
  transform(value) {
    return `${value} (${value.length})`;
  }
}
