import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { DogAPIResponse } from '../shared/models/Breed.model';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  private configUrl = 'https://dog.ceo/api';
  public DEFAULT_BREED_QUANTITY = 20;

  public breedsList$ = new BehaviorSubject<Array<string>>([]);
  public dogsList$ = new BehaviorSubject<Array<string>>([]);

  public getRandomBreeds(quantity?: number): void {
    const url = `${this.configUrl}/breeds/image/random/${
      quantity || this.DEFAULT_BREED_QUANTITY
    }`;
    const observer = {
      next: (res: DogAPIResponse) => {
        console.log('res', res);

        this.breedsList$.next([...res.message]);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    this.http.get<DogAPIResponse>(url).subscribe(observer);
  }

  public getBreedGallery(name: string): void {
    const url = `${this.configUrl}/breed/${name}/images`;
    const observer = {
      next: (res: DogAPIResponse) => {
        this.dogsList$.next([...res.message]);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    this.http.get<DogAPIResponse>(url).subscribe(observer);
  }
}
