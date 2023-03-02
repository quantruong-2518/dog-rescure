import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DogAPIResponse } from '../shared/models/Breed.model';
import { BreedService } from './breed.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss'],
})
export class BreedsListComponent implements OnInit, OnDestroy {
  private readonly _subscription = new Subscription();

  public breedsList$: Observable<Array<string>>;
  public dogsList$: Observable<Array<string>>;

  public myControl = new FormControl<string>('');

  constructor(private readonly _breedService: BreedService) {
    this.breedsList$ = this._breedService.breedsList$.asObservable();
    this.dogsList$ = this._breedService.dogsList$.asObservable();
  }

  public ngOnInit(): void {
    this._breedService.getRandomBreeds();
  }
  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public trackByFunc(index: number) {
    return index;
  }
}
