import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToStringPipe'
})
export class ArrayToStringPipe implements PipeTransform {
  transform(arr: string[]) {
    if (arr) {
      return arr.join(', ');
    }
    return '';
  }
}
