import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breedName',
})
export class BreedNamePipe implements PipeTransform {
  transform(url: string): string {
    const pattern = /https:\/\/images.dog.ceo\/breeds\/(\w+)/;
    const match = url.match(pattern);

    return match ? match[1] : '';
  }
}
