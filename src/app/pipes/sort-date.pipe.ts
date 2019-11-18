import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if(!value) return [];
    console.log('Fechas --> ', value);
    return value.sort((a, b) => {
      return <any>new Date(b.CREATE_TS) - <any> new Date(a.CREATE_TS);
    });
  }

}
