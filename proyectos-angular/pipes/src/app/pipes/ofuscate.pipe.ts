import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ofuscate'
})
export class OfuscatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const obfuscate = args[0];

    if (obfuscate) {
      const size = value.toString().length;
      const newValue = ''.padStart(size, '*');
      return newValue;
    } else {
      return value;
    }
  }
}
