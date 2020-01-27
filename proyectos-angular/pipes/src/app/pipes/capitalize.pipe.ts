import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const splitted = value.toString().split(' ');

    return '*' + splitted[1] + ', ' + splitted[0] + '*';
  }

}
