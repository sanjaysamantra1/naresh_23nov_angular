import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameprefix',
})
export class NameprefixPipe implements PipeTransform {
  transform(name: string, gender: string) {
    if (gender === 'male') {
      return 'Mr.' + name;
    } else {
      return 'Miss.' + name;
    }
  }
}
