import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPipe'
})
export class CountPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value > 0){
      return 'In stock';
    }
    else if(value == 0){
      return 'out of stock'
    }
    return ''
  }

}
