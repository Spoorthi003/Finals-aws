import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let prefix=args[0] || '';

    return `${prefix}${value}`;
  }

}
