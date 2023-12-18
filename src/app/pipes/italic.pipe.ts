import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'italicPipe'
})

export class ItalicPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    return `<i>${value}</i>`;

  }

}
