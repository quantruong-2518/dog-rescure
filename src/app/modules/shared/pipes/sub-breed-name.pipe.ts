import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subBreedName',
})
export class SubBreedNamePipe implements PipeTransform {
  transform(url: string): string {
    const pattern = /\/([a-z]+)-([a-z]+)/;
    const match = url.match(pattern);

    return match ? match[2] : '';
  }
}
