import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false // This impacts performance but updates the list on changes!
})
export class SortPipe implements PipeTransform {

  transform(value: [{}]): any {
      const compare = (a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          let comparison = 0;
          if (nameA > nameB) {
              return comparison = 1;
          } else {
              return comparison = -1;
          }
      };
      return value.sort(compare);
    }
}
