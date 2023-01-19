import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  // pure: true,
})
export class MysortPipe implements PipeTransform {
  transform(arr: any[]) {
    console.log('mysort pipe called...');
    return arr.sort((a, b) => a - b);
  }
}
