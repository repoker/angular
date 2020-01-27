import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofuscador'
})
export class OfuscadorPipe implements PipeTransform {

  transform(value: any, visible: boolean): any {
    return visible ? value : value.replace(/./g,'*');
  }

}
