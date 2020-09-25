import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altvalue'
})
export class AltvaluePipe implements PipeTransform {

  transform(value: unknown, ...args:any[]): unknown {
    
    let altValue=args[0];
    let suffix= args[1] || '.jpg' ; //default value
    
    if(value)
      return value;
    else
      return altValue+suffix;
  }

}
