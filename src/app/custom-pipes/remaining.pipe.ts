import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string, maxChar: number) {
    return maxChar - msg.length;
  }
}
