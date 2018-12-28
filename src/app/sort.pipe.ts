import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: [{}], args?: any): any {
      const compare = (a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          let comparison = 0;
          if (nameA > nameB) {
              return comparison = 1;
          } else if (nameA < nameB) {
              return comparison = -1;
          }
      };
      return value.sort(compare);
    }
}
