import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Breed, DogAPIResponse } from '../shared/models/Breed.model';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  private configUrl = 'https://dog.ceo/api';
  
  public DEFAULT_BREED_QUANTITY = 20;
  private mappedDogsLayout: Array<Breed> = [];

  public breedsList$ = new BehaviorSubject<Array<string>>([]);
  public subBreedsList$ = new BehaviorSubject<Array<string>>([]);
  public breedImagesList$ = new BehaviorSubject<Array<string>>([]);

  public getRandomBreeds(quantity?: number): void {
    const url = `${this.configUrl}/breeds/image/random/${
      quantity || this.DEFAULT_BREED_QUANTITY
    }`;
    const observer = {
      next: (res: DogAPIResponse) => {
        this.breedImagesList$.next([...(res.message as Array<string>)]);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    };

    this.http.get<DogAPIResponse>(url).subscribe(observer);
  }

  public getBreedImages(name: string, quantity?: number): void {
    const url = `${this.configUrl}/breed/${name}/images/random/${
      quantity || this.DEFAULT_BREED_QUANTITY
    }`;
    const observer = {
      next: (res: DogAPIResponse) => {
        this.breedImagesList$.next([...(res.message as Array<string>)]);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    };

    this.http.get<DogAPIResponse>(url).subscribe(observer);
  }

  public getSubBreedImages(
    breedName: string,
    subBreedName: string,
    quantity?: number
  ): void {
    const url = `${
      this.configUrl
    }/breed/${breedName}/${subBreedName}/images/random/${
      quantity || this.DEFAULT_BREED_QUANTITY
    }`;
    const observer = {
      next: (res: DogAPIResponse) => {
        this.breedImagesList$.next([...(res.message as Array<string>)]);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    };

    this.http.get<DogAPIResponse>(url).subscribe(observer);
  }

  public getBreeds(): void {
    const url = `${this.configUrl}/breeds/list/all`;
    const observer = {
      next: (res: DogAPIResponse) => {
        let breeds: Array<string> = [];

        if (res.message) {
          for (const [key, value] of Object.entries(res.message)) {
            this.mappedDogsLayout = [
              ...this.mappedDogsLayout,
              { name: key, sub: value },
            ];

            breeds = [...breeds, key];
          }
        }

        this.breedsList$.next(breeds);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    };

    this.http.get<DogAPIResponse>(url).subscribe(observer);
  }

  public getSubBreeds(breed: string): void {
    const subBreeds = this.mappedDogsLayout.find(
      (item: Breed) => item.name === breed
    );

    this.subBreedsList$.next(subBreeds ? subBreeds.sub : []);
  }

  public resetSelections() {
    this.subBreedsList$.next([]);
  }
}
