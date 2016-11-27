import {Pipe} from '@angular/core';

@Pipe({
  name: 'charCount'
})
export class CharacterCountPipe {
  transform(value) {
    return `${value} (${value.length})`;
  }
}
