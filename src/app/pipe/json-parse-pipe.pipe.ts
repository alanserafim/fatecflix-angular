import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonParsePipe'
})
export class JsonParsePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    return JSON.parse(value);
  }

}
