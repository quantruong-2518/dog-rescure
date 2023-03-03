import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { Breed, DogAPIResponse } from '../shared/models/Breed.model';
import { BreedService } from './breed.service';
import { getBreedByUrl, getSubBreedByUrl } from './breeds-list.helper';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss'],
})
export class BreedsListComponent implements OnInit, OnDestroy {
  private readonly _subscription = new Subscription();

  public breedImagesList$: Observable<Array<string>>;
  public breedsList$: Observable<Array<string>>;
  public subBreedsList$: Observable<Array<string>>;

  public formGroup!: FormGroup;

  constructor(
    private readonly _breedService: BreedService,
    private formBuilder: FormBuilder
  ) {
    this.breedsList$ = this._breedService.breedsList$.asObservable();
    this.subBreedsList$ = this._breedService.subBreedsList$.asObservable();
    this.breedImagesList$ = this._breedService.breedImagesList$.asObservable();
  }

  public ngOnInit(): void {
    this.retrieveDogs();
    this.initForm();
  }
  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public retrieveDogs() {
    this._breedService.getRandomBreeds();
    this._breedService.getBreeds();
  }

  public initForm() {
    this.formGroup = this.formBuilder.group({
      breed: [null, Validators.required],
      subBreed: [null, Validators.required],
    });

    this.watchTheBreedSelectionChange();
    this.watchTheSubBreedSelectionChange();
  }

  public watchTheBreedSelectionChange() {
    this._subscription.add(
      this.formGroup.get('breed')?.valueChanges.subscribe((name: string) => {
        this._breedService.resetSelections();
        this.formGroup.get('subBreed')?.reset();

        this._breedService.getBreedImages(name);
        this._breedService.getSubBreeds(name);
      })
    );
  }

  public watchTheSubBreedSelectionChange() {
    this._subscription.add(
      this.formGroup.get('subBreed')?.valueChanges.subscribe((sub: string) => {
        const breedName = this.formGroup.get('breed')?.value;
        sub && this._breedService.getSubBreedImages(breedName, sub);
      })
    );
  }

  public getBreed(url: string): string {
    return getBreedByUrl(url);
  }
  public getSubBreed(url: string): string {
    return getSubBreedByUrl(url);
  }

  public trackByFunc(index: number) {
    return index;
  }

  public onSubmit(): void {
    // console.log(this.formGroup.value);
    this._breedService.getRandomBreeds();
  }
}
