import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFunction'
})

export class PipeFunctionPipe implements PipeTransform {
  transform(value: any, fn: (value: any) => any, context?: any): any {
    if (context) {
      return fn.call(context, value);
    }
    return fn(value);
  }
}